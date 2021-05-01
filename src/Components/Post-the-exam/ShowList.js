import firebase from './../../firebase'
import { useState, useEffect } from 'react';
const ShowList = () => {
    const [listExams, setListExams] = useState([]);
    const Styles = {
        checkbox: {
            width: '17px',
            height: '17px',
            position: 'none'
        },
        detailBtn: {
            float: 'right',
            justifyContent: 'none',
            padding: '3px',
        },
        header:{
            backgroundColor: '#f45d48',
        },
        upBtn:{
            float: 'right',
            justifyContent: 'none',
            padding: '3px',
            backgroundColor: '#f45d48'
        }
    }
    useEffect(() => {
        let exams = [];
        async function fetchExams() {
            await firebase.collection("exams").get().then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    console.log(doc.data());
                    exams = [...exams, doc.data()];
                });
            });
            setListExams(exams);
        }
        fetchExams();
    }, [])
    return (
        <div>
            <div className="card-header" style={Styles.header}>
                <h5>Các đề thi đang chờ duyệt</h5>
                </div>
            <ul className="list-group">
                {listExams.map((value, index) => {
                    return <div>
                        <li className="list-group-item align-items-center ">
                            <input type="checkbox" style={Styles.checkbox} name="exampleRadios" id={index} />
                            <label className="form-check-label ml-2" htmlFor={index}>{value.titleExam}</label>
                            <button className='btn-one mx-1' style={Styles.detailBtn}><i className="bi bi-binoculars"></i> Chi tiết</button>
                        </li></div>
                })}

            </ul>
        </div>
    )
}

export default ShowList

