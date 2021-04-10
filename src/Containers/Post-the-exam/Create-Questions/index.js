import React, { useState } from 'react';
import Quill from '../../../Components/Post-the-exam/Quill';
import Answer from '../../../Components/Post-the-exam/Answer';

export default function CreateQuestion() {
    const [valueQuestionQuill, setValueQuestionQuill] = useState('');
    const [valueAnswerQuill, setValueAnswerQuill] = useState('');
    const [listAnswers, setListAnswer] = useState(['A', 'B']);

    function addAnswer() {
        if (listAnswers.length === 0)
            setListAnswer([...listAnswers, 'A']);
        else if (listAnswers.length === 1)
            setListAnswer([...listAnswers, 'B']);
        else if (listAnswers.length === 2)
            setListAnswer([...listAnswers, 'C']);
        else if (listAnswers.length === 3)
            setListAnswer([...listAnswers, 'D']);
        else if (listAnswers.length === 4)
            setListAnswer([...listAnswers, 'E']);
        else if (listAnswers.length === 5)
            setListAnswer([...listAnswers, 'F']);
        else if (listAnswers.length === 6)
            setListAnswer([...listAnswers, 'G']);
        else if (listAnswers.length === 7)
            setListAnswer([...listAnswers, 'H']);
    }
    function removeAnswer() {
        listAnswers.pop();
        setListAnswer([...listAnswers]);
    }
    return (
        <>
            <div className="form-row my-2">
                <label className=" my-2 label form-group col-1 text-danger">Điểm</label>
                <input className="form-control form-group col-2" type="number" placeholder="0.5" />
            </div>
            <div className="my-2">
                <label className="label">Câu 1:</label>
                <div className='form-group' dangerouslySetInnerHTML={{ __html: valueQuestionQuill }} />
                <Quill setValueQuill={setValueQuestionQuill} placeHolder='Nội dung câu hỏi'></Quill>
            </div>
            <div className='my-4'>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked />
                    <label className="form-check-label" for="exampleRadios1">
                        Câu trả lời trắc nghiệm:
                    </label>
                </div>
                {listAnswers.map(function (value, index) {
                    return (<div className='my-2' key={index}><Answer
                        remove={removeAnswer}
                        value={value}
                    >
                    </Answer></div>)
                })}
                <button className="btn btn-info" onClick={addAnswer} ><strong>+</strong></button>
            </div>
            <div className='my-4'>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2" />
                    <label className="form-check-label" for="exampleRadios2">
                        Câu trả lời tự luận:
                     </label>
                </div>
                <div className='form-group' dangerouslySetInnerHTML={{ __html: valueAnswerQuill }} />
                <Quill setValueQuill={setValueAnswerQuill} placeHolder='Nội dung câu trả lời tự luận'></Quill>
            </div>
            <div className="btn-group" role="group" aria-label="group button">
                <button type="button" className="btn btn-info mx-2"><i className="bi bi-arrow-left mr-2"></i>Câu trước</button>
                <button type="button" className="btn btn-info mx-2"><i className="bi bi-plus mr-2"></i>Thêm câu hỏi</button>
                <button type="button" className="btn btn-info mx-2"><i className="bi bi-check mr-2"></i>Hoàn thành</button>
            </div>
        </>
    )
}