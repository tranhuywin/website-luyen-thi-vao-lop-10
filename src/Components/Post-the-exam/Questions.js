import { useState } from 'react'
import { Link } from 'react-router-dom';
import TickMultipleChoieAnswer from './TickMultipleChoieAnswer'
import Quill from './Quill';
import FiltermathSigns from './../../Containers/Post-the-exam/Create-Questions/FiltermathSigns';
export default function Questions(props) {
    const [shouldShowCorrectAnswer, setShouldShowCorrectAnsewer] = useState(false);
    const [valueQuestionQuill, setValueQuestionQuill] = useState('');
    function handleShowCorrectAnswer(e) {
        e.preventDefault();
        shouldShowCorrectAnswer ? setShouldShowCorrectAnsewer(false) : setShouldShowCorrectAnsewer(true);
    }

    return (
            <div className="card" >
                <h5 className="card-header">Câu {props.number} ({props.point} đ)</h5>
                <div className="card-body">
                    <h5 className="card-title" dangerouslySetInnerHTML={{ __html: props.question }}></h5>
                    <h4><FiltermathSigns valueQuill={props.question}></FiltermathSigns></h4>
                    {props.isMulipleChoiceAnswer && (
                        <div>
                            <p>Câu trả lời:</p>
                            {props.multileChoieAnswers.map((answer, index) => {
                                return <TickMultipleChoieAnswer 
                                key={index}
                                id={props.number + answer.ID} 
                                name={answer.ID} 
                                nameRadio={props.number}
                                value={answer.content}
                                onClickAnswer={props.onChangeAnswer}/>
                            })}
                        </div>

                    )}
                    {props.isQuillAnswer && <div>
                    <div className='form-group' dangerouslySetInnerHTML={{ __html: valueQuestionQuill }} />
                    <Quill setValueQuill={setValueQuestionQuill} placeHolder='Nội dung câu trả lời'></Quill>
                    </div>
                    }

                    {shouldShowCorrectAnswer ? <div>
                        <p>Giải: {props.correctAnswer.multileChoieAnswers}</p>
                        <p dangerouslySetInnerHTML={{ __html: props.correctAnswer.explain }}></p>
                    </div> : ''}

                    {props.isPreview && 
                    <div>  
                        <button class="btn btn-primary mr-2" onClick={handleShowCorrectAnswer}>
                    Xem câu trả lời
                    </button>
                    <Link to={"/tao-cau-hoi/" + props.number} className="btn btn-primary">Sửa câu hỏi</Link>
                      </div>}             
                </div>
            </div>
    )
}

