import Question from "../../../Components/Post-the-exam/Questions";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Countdown from "react-countdown";
import { useState, useEffect } from "react";
import { useParams } from 'react-router';
import { GetAllDataInCollection } from '../../../firebase';
import LineLoading from '../../../Components/LoadPage/LineLoading';

export default function DoTest() {
    const [Exam, setExam] = useState(null);
    let { idExam } = useParams();
    const ramdomTextAnswer =
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium.";
    const ramdomTextQuestion =
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa ?";
    const [show, setShow] = useState(false);
    const Completionist = () => <span>You are good to go!</span>;
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => {
        async function fetchdata() {
            const snapshot = await GetAllDataInCollection('/exams');
            snapshot.forEach((doc) => {
                if (doc.id === idExam)
                    setExam(doc.data());
            });
        }
        fetchdata();
    }, [])
    console.log(Exam);
    return (
        <>
            {!Exam && <LineLoading></LineLoading>}

            <h2>{Exam && Exam.titleExam}</h2>
            {Exam && Exam.listQuestions.map((question) => {
                return (<div className="my-2">
                    <Question
                        number={question.number}
                        point={question.point}
                        question={question.question}
                        isMulipleChoiceAnswer={question.isMulipleChoiceAnswer}
                        multileChoieAnswers={question.multileChoieAnswers}
                        Answer={question.multileChoieAnswers}
                        correctAnswer={question.correctAnswer}
                        isPreview={false}
                    ></Question>
                </div>)
            })}



            <Button variant="primary" onClick={handleShow}>
                Hoàn thành
      </Button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Hoàn thành bài thi</Modal.Title>
                </Modal.Header>
                <Modal.Body>Bạn đã chắc chắn muốn kết thúc ?</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Quay lại
          </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Đồng ý
          </Button>
                </Modal.Footer>
            </Modal>


            <div class="position-fixed bottom-0 right-0 p-3" style={{ "z-index": 5, "right": 0, "bottom": 0 }}>
                <div id="liveToast" class="toast show" role="alert" aria-live="assertive" aria-atomic="true" data-delay="2000">
                    <div class="toast-header">
                        <strong class="mr-auto">Thời gian còn lại</strong>
                    </div>
                    <div class="toast-body">
                        <Countdown date={Date.now() + 5400000}>
                            <Completionist />
                        </Countdown>
                    </div>
                </div>
            </div>
        </>
    );
}
