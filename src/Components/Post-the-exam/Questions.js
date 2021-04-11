import React, { useState } from 'react'
import TickMultipleChoieAnswer from './TickMultipleChoieAnswer'

export default function Questions(props) {
    const [shouldShowCorrectAnswer, setShouldShowCorrectAnsewer] = useState(false);
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
                    {shouldShowCorrectAnswer ? <div>
                        <p>Giải: {props.correctAnswer}</p>
                        
                    </div> : ''}
                    <button class="btn btn-primary mr-2" onClick={handleShowCorrectAnswer}>
                    Xem câu trả lời
                    </button>
                    <a href="/" className="btn btn-primary">Sửa câu hỏi</a>
                </div>
            </div>
            
        </>
    )
}

