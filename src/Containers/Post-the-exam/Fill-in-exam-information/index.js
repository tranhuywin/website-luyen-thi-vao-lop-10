import { useState } from 'react';
import { useHistory } from 'react-router';
import { useDispatch } from 'react-redux';
import { addDetailOfExam } from '../../../actions/exam';
import {ListShools} from '../../../constants/ListShools';

export default function FillInExamInformation() {
    const [valueTitleTheExam, setValueTitleTheExam] = useState(['Bộ Giáo Dục', 'thi thật', '90p', 'Toán', '1', '2020-2021']);
    const [valueInput, setValueInput] = useState('');
    //const exam = useSelector(state => state.exam);
    const dispatch = useDispatch();
    let history = useHistory();

    const user = localStorage.getItem('_User');
    !user && history.push('/dang-nhap');

    function handleValueTitleTheExam(e) {
        switch (e.target.id) {
            case 'selectExamPlace':
                valueTitleTheExam[0] = e.target.value;
                setValueTitleTheExam(valueTitleTheExam);
                break;
            case 'selectExamFormat':
                valueTitleTheExam[1] = e.target.value;
                setValueTitleTheExam(valueTitleTheExam);
                break;
            case 'selectExamTime':
                valueTitleTheExam[2] = e.target.value;
                setValueTitleTheExam(valueTitleTheExam);
                break;
            case 'selectSubjects':
                valueTitleTheExam[3] = e.target.value;
                setValueTitleTheExam(valueTitleTheExam);
                break;
            case 'selectTimesExam':
                valueTitleTheExam[4] = e.target.value;
                setValueTitleTheExam(valueTitleTheExam);
                break;
            case 'selectSchoolYear':
                valueTitleTheExam[5] = e.target.value;
                setValueTitleTheExam(valueTitleTheExam);
                break;
            default:
                break;

        }
        setValueInput(valueTitleTheExam[0] + ' - ' + valueTitleTheExam[1] + ' - ' + valueTitleTheExam[2]
            + ' - ' + valueTitleTheExam[3] + ' - Lần ' + valueTitleTheExam[4] + ' - Năm học ' + valueTitleTheExam[5]
        );
    }

    function handleSubmit(e) {
        e.preventDefault();
        const detailExam = {
            titleExam: valueInput,
            place: valueTitleTheExam[0],
            timesOfExam: parseInt(valueTitleTheExam[2]),
            timesProposed: parseInt(valueTitleTheExam[4]),
            subjects: valueTitleTheExam[3],
            format: valueTitleTheExam[1],
            schoolYear: valueTitleTheExam[5],
        }
        const action = addDetailOfExam(detailExam);
        dispatch(action);
        history.push('/tao-cau-hoi/1');

    }
    return (
        <>
            <h1>Điền thông tin bài thi</h1>
            <form className='mx-auto' onSubmit={handleSubmit}>
                <div className="form-group">
                    <div className="form-inline">
                        <label className='my-1 mr-2' htmlFor="selectExamPlace">Nơi ra đề</label>
                        
                        <input type="text" list="selectExamPlaceData" id="selectExamPlace" className=" my-1 mr-sm-2 form-control" onChange={handleValueTitleTheExam} />
                        <datalist  id="selectExamPlaceData">
                            {ListShools.map((value, index) => { return <option key={index}>{value}</option> })}
                        </datalist>
                        <label className="my-1 mr-2" htmlFor="selectExamFormat">Dạng đề</label>
                        <select className="custom-select my-1 mr-sm-2" onClick={handleValueTitleTheExam}
                            id="selectExamFormat">
                            <option selected value="thi thật">Thi thật</option>
                            <option value="thi thử">Thi thử</option>
                        </select>
                        <label className="my-1 mr-2" htmlFor="selectExamTime">Thời gian</label>
                        <select className="custom-select my-1 mr-sm-2" onClick={handleValueTitleTheExam}
                            id="selectExamTime">
                            <option value="15p">15p</option>
                            <option value="30p">30p</option>
                            <option defaultValue selected value="45p">45p</option>
                            <option value="90p">90p</option>
                            <option value="120p">120p</option>
                        </select>

                        <label className='my-1 mr-2' htmlFor="selectSubjects">Môn</label>
                        <select className="form-control" onClick={handleValueTitleTheExam}
                            id="selectSubjects">
                            <option defaultValue>Toán</option>
                            <option>Ngữ văn</option>
                            <option>Anh văn</option>
                        </select>
                        <label className="ml-1 mr-2" htmlFor="selectTimesExam">Lần ra đề</label>
                        <select className="custom-select my-1 mr-sm-2" onClick={handleValueTitleTheExam}
                            id="selectTimesExam">
                            <option defaultValue selected value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                        </select>
                    </div>
                    <div className="form-inline">
                        <label className="ml-1 mr-2" htmlFor="selectSchoolYear">Năm học</label>
                        <select className="custom-select my-1 mr-sm-2" onClick={handleValueTitleTheExam}
                            id="selectSchoolYear">
                            <option defaultValue selected>2020-2021</option>
                            <option value="2019-2020">2019-2020</option>
                            <option value="2018-2019">2018-2019</option>
                            <option value="2017-2018">2017-2018</option>
                        </select>
                    </div>
                    <div className="form-group mt-2">
                        <h3 className='my-1 mr-2'>Tiêu đề bài thi</h3>
                        <input type="text" className="form-control" required
                            value={valueInput}
                            onChange={(e) => { setValueInput(e.target.value) }}
                        ></input>
                    </div>
                </div>
                <button type="submit" className="btn-one" >Tiếp tục <i className="bi bi-arrow-right-short"></i></button>
            </form>

        </>
    )
}
