import Question from "../../../Components/Post-the-exam/Questions";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Countdown from "react-countdown";
import { useState, useEffect } from "react";
import { useHistory, useParams } from 'react-router';
import { GetAllDataInCollection } from '../../../firebase';
import LineLoading from '../../../Components/LoadPage/LineLoading';

export default function DoTest() {
    const [exam, setExam] = useState(null);
    let { idExam } = useParams();
    let history = useHistory();
    const [show, setShow] = useState(false);
    const [answer, setAnswer] = useState([{ studentAnswer: null }]);
    const Completionist = () => <span>Hết thời gian làm bài!</span>;
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    let mark = 0;
    const StylesTitle = {
        display: 'inline-block',
        padding: '1rem',
        color: '#697b92',
        textAlign: 'center',
        backgroundColor: '#rgb(38 40 43)',
        borderRadius: '1rem'
    }
    function handleStudentAnswer(e, idRadio, questionNumber) {
        if (e.target.type === 'radio') {
            answer.map((value, index) => {
                if ((index + 1) === parseInt(questionNumber))
                    value.studentAnswer = idRadio;
            })
        }
        setAnswer([...answer]);
    }
    //console.log(answer);
    function handleSubmitExam() {
        answer.map((value, index) => {
            if (exam.listQuestions[index].isMulipleChoiceAnswer && value.studentAnswer === exam.listQuestions[index].correctAnswer.multileChoieAnswers) {
                mark += exam.listQuestions[index].point;
            }
        })
        //console.log(answer);
        localStorage.setItem('answersStudent', JSON.stringify(answer));
        history.push(`/luyen-thi/lam-bai-thi/${idExam}/cham-diem`);
    }

    useEffect(() => {
        async function fetchdata() {
            const snapshot = await GetAllDataInCollection('/exams');
            snapshot.forEach((doc) => {
                if (doc.id === idExam) {
                    setExam(doc.data());
                    const innitArrayAnswer = [];
                    doc.data() && doc.data().listQuestions.map(() => {
                        innitArrayAnswer.push({ studentAnswer: null });
                        console.log(doc.data().titleExam);
                    })
                    setAnswer(innitArrayAnswer);
                }
            });
        }
        fetchdata();
    }, [])

    return (
        <div>
            {!exam && <LineLoading></LineLoading>}

            <h2 style={StylesTitle}>{exam && exam.titleExam}</h2>
            {exam && exam.listQuestions.map((question, index) => {
                return (<div className="my-2" key={index}>
                    <Question
                        number={question.number}
                        point={question.point}
                        question={question.question}
                        isMulipleChoiceAnswer={question.isMulipleChoiceAnswer}
                        multileChoieAnswers={question.multileChoieAnswers}
                        Answer={question.multileChoieAnswers}
                        correctAnswer={question.correctAnswer}
                        isPreview={false}
                        onChangeAnswer={handleStudentAnswer}
                    ></Question>
                </div>)
            })}



            <button className="btn-one my-3" style={{float: 'right', fontSize:'20px'}} onClick={handleShow}>
            <i className="bi bi-check2-square"></i> Hoàn thành
            </button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Hoàn thành bài thi</Modal.Title>
                </Modal.Header>
                <Modal.Body>Bạn đã chắc chắn muốn kết thúc ?</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Quay lại
                    </Button>
                    <Button variant="primary" onClick={handleSubmitExam}>
                        Đồng ý
                    </Button>
                </Modal.Footer>
            </Modal>

            {exam && <div class="position-fixed bottom-0 right-0 p-3" style={{ "z-index": 5, "right": 0, "bottom": 0 }}>
                <div id="liveToast" class="toast show" role="alert" aria-live="assertive" aria-atomic="true" data-delay="2000">
                    <div class="toast-header">
                        <strong class="mr-auto">Thời gian còn lại</strong>
                    </div>
                    <div class="toast-body">
                        <Countdown date={Date.now() + (parseInt(exam?.timesOfExam) * 54000)}>
                            <Completionist />
                        </Countdown>
                    </div>
                </div>
            </div>}

        </div>
    );
}
