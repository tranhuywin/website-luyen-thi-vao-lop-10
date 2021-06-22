import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import FormStudentAnswer from '../../../Components/FormStudentAnswer';
import { GetAllDataInCollection } from '../../../firebase';
import VerticallyCenteredModal from '../../../Components/Modal-react-boostrap';

function FormMarkExam() {
    let { idExam } = useParams();
    const [exam, setExam] = useState(null);
    const [contentModal, setContentModal] = useState(null);
    const [isShowModal, setisShowModal] = useState(false);
    const [answerStudent, setanswerStudent] = useState(null);
    const handleClose = () => setisShowModal(false);
    const handleShow = () => setisShowModal(true);
    //console.log(answerStudent);
    function handleClickShowAnswer(content) {
        setContentModal(content);
        handleShow();
    }
    useEffect(() => {
        async function fetchdata() {
            const snapshot = await GetAllDataInCollection('/exams');
            snapshot.forEach((doc) => {
                if (doc.id === idExam)
                    setExam(doc.data());
            });
        }
        setanswerStudent(JSON.parse(localStorage.getItem('answersStudent')));
        fetchdata();
    }, [])
    return (
        <div>
            <FormStudentAnswer
                idexam={idExam}
                listQuestions={exam?.listQuestions}
                listAnsewerStudent={answerStudent}
                onClickShowAnswer={handleClickShowAnswer}
            />
            <VerticallyCenteredModal heading='Lời giải'
                body={contentModal}
                onHide={handleClose}
                onSubmit={handleClose}
                show={isShowModal}
                textClose='Đóng'
                textSubmit='Oke đã hiểu' />
        </div>
    )
}

export default FormMarkExam
