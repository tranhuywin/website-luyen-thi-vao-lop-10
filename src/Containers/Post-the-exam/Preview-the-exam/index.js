import React from 'react'
import Question from '../../../Components/Post-the-exam/Questions'
export default function PreviewTheExam() {
    const ramdomTextAnswer = 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium.'
    const ramdomTextQuestion = 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa ?'

    return (
        <>
        <h2>Lorem ipsum dolor sit amet, consectetuer adipiscing elit</h2>
            <div className='my-2'>
                <Question number='Câu 1'
                    point='0.5'
                    question={ramdomTextQuestion}
                    multileChoieAnswers={true}
                    correctAnswer='A'
                >
                </Question>
            </div>
            <div className='my-2'>
                <Question number='Câu 2'
                    point='0.5'
                    question={ramdomTextQuestion}
                    multileChoieAnswers={true}
                    correctAnswer='A'
                >
                </Question>
            </div><div className='my-2'>
                <Question number='Câu 3'
                    point='0.5'
                    question={ramdomTextQuestion}
                    multileChoieAnswers={false}
                    correctAnswer={ramdomTextAnswer}
                >
                </Question>
            </div>
            <button className="btn btn-success ml-2">
                    Hoành thành
            </button>
        </>
    )
}
