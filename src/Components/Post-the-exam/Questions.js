import React, { useState } from 'react'
import { Link } from 'react-router-dom';
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
                <h5 className="card-header">Câu {props.number} ({props.point})</h5>
                <div className="card-body">
                    <h5 className="card-title" dangerouslySetInnerHTML={{ __html: props.question }}></h5>
                    {props.isMulipleChoiceAnswer && (
                        <div>
                            <p>Câu trả lời:</p>
                            {props.multileChoieAnswers.map((answer) => {
                                return <TickMultipleChoieAnswer id={props.number + answer.ID} name={answer.ID} value={answer.content}></TickMultipleChoieAnswer>
                            })}
                        </div>
                    )}
                    {shouldShowCorrectAnswer ? <div>
                        <p>Giải: {props.correctAnswer.multileChoieAnswers}</p>
                        <p dangerouslySetInnerHTML={{ __html: props.correctAnswer.explain }}></p>
                    </div> : ''}
                    <button className="btn btn-primary mr-2" onClick={handleShowCorrectAnswer}>
                        Xem câu trả lời
                    </button>
                    <Link to={"/tao-cau-hoi/" + props.number} className="btn btn-primary">Sửa câu hỏi</Link>
                </div>
            </div>

        </>
    )
}

