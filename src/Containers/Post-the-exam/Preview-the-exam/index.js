import Question from '../../../Components/Post-the-exam/Questions';
import firebase from '../../.././firebase';
import { useSelector } from 'react-redux';
import { useHistory } from "react-router";

export default function PreviewTheExam() {
    const exam = useSelector(state => state.exam);
    let history = useHistory();
    function handleSubmit() {
        const docRef = firebase.firestore().collection('exams').doc();
        docRef.set(exam).then(() => {
            console.log("Document successfully written!");
        })
            .catch((error) => {
                console.error("Error updating document: ", error);
            });
        history.push('/');
    }

    return (
        <>
            <h2>{exam.titleExam}</h2>
            {
                exam.listQuestions.map((question, index) => {
                    return <div className='my-2' key={index}>
                        <Question number={question.number}
                            point={question.point}
                            question={question.question}
                            isMulipleChoiceAnswer={question.isMulipleChoiceAnswer}
                            multileChoieAnswers={question.multileChoieAnswers}
                            Answer={question.multileChoieAnswers}
                            correctAnswer={question.correctAnswer}
                            isPreview = {true}
                        >
                        </Question>
                    </div>
                })
            }
            <button className="btn-one " onClick={handleSubmit}>
                <i className="bi bi-check"></i>
                Hoành thành

            </button>
        </>
    )
}
