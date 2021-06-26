import Styles from './FormStudentAnswer.module.css'
import Item from './Items';

const FormStudentAnswer = ({ listQuestions, listAnsewerStudent, onClickShowAnswer }) => {
    let mark = 0;
    return (
        <div>
            <table className='table table-striped'>
                <thead>
                    <tr className={Styles.header}>
                        <th scope="col">Câu</th>
                        <th scope="col" >Đề</th>
                        <th scope="col">Điểm</th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody >
                    {listQuestions && listAnsewerStudent && listQuestions.map((question, index) => {
                        const iscorrect = listAnsewerStudent[index].studentAnswer === question.correctAnswer.multileChoieAnswers;
                        iscorrect && (mark = (mark + parseInt(question.point)));
                        return <Item
                            key={index}
                            number={question.number}
                            point={question.point}
                            question={question.question}
                            correctAnswer={question.correctAnswer.explain}
                            isCorrect={iscorrect}
                            isMulipleChoiceAnswer={false}
                            onClick={onClickShowAnswer}
                        >
                        </Item>
                    })}
                </tbody>
            </table>
            <label style={{fontSize: '24px'}}>Tổng điểm: <strong>{mark}/10 điểm</strong></label>

        </div>
    )
}

export default FormStudentAnswer
