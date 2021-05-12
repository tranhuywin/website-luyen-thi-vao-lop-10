import ShowList from './../../../Components/Post-the-exam/ShowList';
import FilterExam from './../../../Components/Post-the-exam/FilterExam';
import { useState, useEffect } from 'react';
import { GetAllDataInCollection, DeleteDataFromCollection } from '../../../firebase'

function PostToTheWebsite() {
    const [listExams, setListExams] = useState([]);
    const Styles = {
        upBtn: {
            float: 'right',
            justifyContent: 'none',
            marginTop: '5%',
        },
        checkbox: {
            marginTop: '2px !important'
        }
    }
    function hanldeSelectAll(e) {
        let tempList;
        tempList = listExams.map((value) => {
            return (
                {
                    ...value,
                    checked: e.target.checked,
                }
            )
        })
        setListExams(tempList);
    }

    function hanldeRemoveExams() {
        let tempList;
        tempList = listExams.map((value) => {
            value.checked && DeleteDataFromCollection(`exams/${value.id}`);
            if (!value.checked)
                return value;
        })

        //remove obj in state
        let results = tempList.filter((item) => {
            return typeof item === 'object';
        });
        setListExams(results);
    }

    function handleClickCheck(e) {
        let tempList;
        tempList = listExams.map((value) => {
            return (
                {
                    ...value,
                    checked: e.target.id === value.id ? !value.checked : value.checked,
                }
            )
        })
        setListExams(tempList);
    }

    useEffect(() => {
        let exams = [];
        async function fetchdata() {
            const snapshot = await GetAllDataInCollection('/exams');
            snapshot.forEach((doc) => {
                exams = [...exams, { id: doc.id, checked: false, data: doc.data() },];
            });
            setListExams(exams);
        }
        fetchdata();
    }, [])

    return (
        <div>
            <FilterExam></FilterExam>
            <ShowList list={listExams} onclickCheck={handleClickCheck}></ShowList>
            <div className='m-2' onClick={hanldeSelectAll}>
                <input type="checkbox" style={Styles.checkbox} name="exampleRadios" id='pickAll' />
                <label className="form-check-label ml-1" htmlFor='pickAll'><small>chọn tất cả</small></label>
            </div>
            <button className='btn-one' style={Styles.upBtn}><i className="bi bi-file-arrow-up"></i> Đăng đề</button>
            <button className='btn-two mx-2' onClick={hanldeRemoveExams} style={Styles.upBtn}><i className="bi bi-trash"></i> Xóa đề</button>           
        </div>
    )
}

export default PostToTheWebsite
