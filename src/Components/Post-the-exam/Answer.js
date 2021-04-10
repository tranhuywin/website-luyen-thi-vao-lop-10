import React, { useState } from 'react';

function Answer(props) {
    const [isCorrect, setIsCorrect] = useState(false);
    function hanldeCorrectAnswer() {
        isCorrect ? setIsCorrect(false) : setIsCorrect(true);

    }
    return (
        <>
            <div className='input-group'>
                <div className="input-group-prepend">
                    <span
                        className={'input-group-text ' + (isCorrect === true ? 'bg-success text-light' : '')}
                    >{props.value}</span>
                </div>
                <textarea className="form-control" aria-label="Answer" placeholder='Câu trả lời'></textarea>
                <div className="input-group-append" id="button-addon4">
                    <button className="btn btn-success" 
                    onClick={hanldeCorrectAnswer} 
                    type="button">
                    {!isCorrect ? 'Đúng' : "Sai"}
                    </button>
                    <button className="btn btn-danger px-3"
                        type="button"
                        onClick={props.remove}>
                        Xóa
                    </button>
                </div>
            </div>

        </>
    )
}

export default Answer;