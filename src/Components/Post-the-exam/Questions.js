import React, { useState } from 'react'
import TickMultipleChoieAnswer from './TickMultipleChoieAnswer'
import Quill from './Quill'
export default function Questions(props) {
    const [shouldShowCorrectAnswer, setShouldShowCorrectAnsewer] = useState(false);
    const [valueQuestionQuill, setValueQuestionQuill] = useState('');
    const [valueAnswerQuill, setValueAnswerQuill] = useState('');
    function handleShowCorrectAnswer(e) {
        e.preventDefault();
        shouldShowCorrectAnswer ? setShouldShowCorrectAnsewer(false) : setShouldShowCorrectAnsewer(true);
    }
    return (
        <>
            <div className="card" >
                <h5 className="card-header">{props.number} ({props.point})</h5>
                <div className="card-body">
                    <h5 className="card-title">{props.question}</h5>
                    {props.multileChoieAnswers ? (
                        <div>
                            <p>Câu trả lời:</p>
                            <TickMultipleChoieAnswer id={props.number + 'A'} name='A'></TickMultipleChoieAnswer>
                            <TickMultipleChoieAnswer id={props.number + 'B'} name='B'></TickMultipleChoieAnswer>
                            <TickMultipleChoieAnswer id={props.number + 'C'} name='C'></TickMultipleChoieAnswer>
                            <TickMultipleChoieAnswer id={props.number + 'D'} name='D'></TickMultipleChoieAnswer>
                        </div>
                    ) : ''}
                    {props.isQuillAnswer?<>
                    <div className='form-group' dangerouslySetInnerHTML={{ __html: valueQuestionQuill }} />
                    <Quill setValueQuill={setValueQuestionQuill} placeHolder='Nội dung câu hỏi'></Quill>
                    </>
                    :''}
                    {shouldShowCorrectAnswer ? <div>
                        <p>Giải: {props.correctAnswer}</p>
                        
                    </div> : ''}
                    {props.isPreview ? 
                    <div>  
                        <button class="btn btn-primary mr-2" onClick={handleShowCorrectAnswer}>
                    Xem câu trả lời
                    </button>
                    <a href="/" className="btn btn-primary">Sửa câu hỏi</a>
                      </div>:'' }
                   
                   
                </div>
            </div>
            
        </>
    )
}

