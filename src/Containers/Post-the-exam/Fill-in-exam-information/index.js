import React, { useState } from 'react';

export default function FillInExamInformation() {
    const [valueTitleTheExam, setValueTitleTheExam] = useState(['Bộ Giáo Dục', 'thi thật', '90p', 'Toán', '1', '2020-2021']);
    const [valueInput, setValueInput] = useState('');
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

    return (
        <>
            <form className='mx-auto'>
                <div className="form-group">
                    <div className="form-inline">
                        <label className='my-1 mr-2' htmlFor="selectExamPlace">Nơi ra đề</label>
                        <select className=" my-1 mr-sm-2 form-control" onClick={handleValueTitleTheExam}
                            id="selectExamPlace">
                            <option value='Bộ Giáo Dục'>Bộ Giáo Dục</option>
                            <option defaultValue value='THCS Kim Long'>THCS Kim Long</option>
                            <option value='THPT Trần Phú'>THPT Trần Phú</option>
                            <option value='THPT Nguyễn Trãi'>THPT Nguyễn Trãi</option>
                        </select>
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
                    </div>
                </div>
                <div className="form-group">
                    <div className="form-inline">
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
                        <label className='my-1 mr-2'>Tiêu đề bài thi</label>
                        <input type="text" className="form-control" required
                            value={valueInput}
                        ></input>
                    </div>
                </div>
                <button type="submit" className=" btn btn-primary">Hoàn thành</button>
            </form>

        </>
    )
}
