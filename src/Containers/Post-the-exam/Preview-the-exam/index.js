import Question from '../../../Components/Post-the-exam/Questions';
import firebase from '../../.././firebase';
import { useSelector } from 'react-redux';
import { useHistory } from "react-router";
import { useState } from 'react';
import VerticallyCenteredModal from '../../../Components/Modal-react-boostrap';
import Toast from '../../../Components/Toast-react-bootstrap';

export default function PreviewTheExam() {
    const exam = useSelector(state => state.exam);
    const [showModal, setShowModal] = useState(false);
    const [toastShow, setToastShow] = useState(false);

    let history = useHistory();

    function handleSubmit() {
        handleShow();
    }

    const handleSubmitModal = () => {
        const docRef = firebase.firestore().collection('exams').doc();
        docRef.set(exam).then(() => {
            history.push('/');
        })
            .catch(() => {
                setToastShow(true);
                setTimeout(setStateToast, 3000);
            });
    };
    function setStateToast(){
        setToastShow(false);
    }
    const handleClose = () => setShowModal(false);
    const handleShow = () => setShowModal(true);
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
                            isPreview={true}
                        >
                        </Question>
                    </div>
                })
            }
            <VerticallyCenteredModal heading='Thông báo'
                body='Bạn có muốn gửi đề cho admin để admin đăng đề, bạn cần chờ một khoảng thời gian để admin duyệt cho bạn'
                onHide={handleClose}
                onSubmit={handleSubmitModal}
                show={showModal}
                textClose='tiếp tục sửa'
                textSubmit='Oke, vẫn gửi' />
            <button className="btn-one mt-2" onClick={handleSubmit} style={{float: 'right'}}>
                <i className="bi bi-check"></i>
                Gửi lên hệ thống
            </button>
            <Toast heading= 'Thông báo' body='Lỗi: Bạn gửi thất bại' isShow={toastShow}></Toast>
        </>
    )
}
