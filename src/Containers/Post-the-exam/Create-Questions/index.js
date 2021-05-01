import { useState } from "react";
import Quill from "../../../Components/Post-the-exam/Quill";
import Answer from "../../../Components/Post-the-exam/CreateMultipleChoiceAnswer";
import { useHistory, useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { addNewQuestion } from "../../../actions/exam";
export default function CreateQuestion() {
    handleRefresh();
    let { questionNumber } = useParams();
    //const [questionNumber, setQuestionNumber] = useState(1);
    const [valueQuestionQuill, setValueQuestionQuill] = useState("");
    const [valueAnswerQuill, setValueAnswerQuill] = useState("");
    const [idCorrectAnswer, setIdCorrectAnswer] = useState("");
    const [listAnswers, setListAnswer] = useState([
        { ID: "A", content: null },
        { ID: "B", content: null },
    ]);
    const [point, setPoint] = useState(0);
    const [isMuilpleChoieAnswer, setIsMuilpleChoieAnswer] = useState(false);
    let history = useHistory();
    const dispatch = useDispatch();
    const exam = useSelector((state) => state.exam);
    console.log(exam);
    //handle value of title
    const titleExam = useSelector((state) => state.exam.titleExam);
    !titleExam && history.push("/dien-thong-tin-de");

    //handle refresh
    function handleRefresh() {
        window.onbeforeunload = (event) => {
            const e = event || window.event;
            // Cancel the event
            e.preventDefault();
            if (history.location.pathname === "/tao-cau-hoi") {
                if (e) {
                    e.returnValue = ""; // Legacy method for cross browser support
                }
                return ""; // Legacy method for cross browser support
            }
        };
    }

    //finish add question
    function handleSuccess() {
        hanldeAddQuestion();
        history.push("/xem-truoc-de");
    }

    function addAnswer() {
        if (listAnswers.length === 0)
            setListAnswer([...listAnswers, { ID: "A", content: null }]);
        else if (listAnswers.length === 1)
            setListAnswer([...listAnswers, { ID: "B", content: null }]);
        else if (listAnswers.length === 2)
            setListAnswer([...listAnswers, { ID: "C", content: null }]);
        else if (listAnswers.length === 3)
            setListAnswer([...listAnswers, { ID: "D", content: null }]);
        else if (listAnswers.length === 4)
            setListAnswer([...listAnswers, { ID: "E", content: null }]);
        else if (listAnswers.length === 5)
            setListAnswer([...listAnswers, { ID: "F", content: null }]);
        else if (listAnswers.length === 6)
            setListAnswer([...listAnswers, { ID: "G", content: null }]);
        else if (listAnswers.length === 7)
            setListAnswer([...listAnswers, { ID: "H", content: null }]);
    }

    //this func remove item last of listAnsers TODO: remove item by index of item
    function removeAnswer() {
        listAnswers.pop();
        setListAnswer([...listAnswers]);
    }

    //get content of answer
    function handleGetContent(e) {
        listAnswers.map((value, index) => {
            return (listAnswers[index].content = listAnswers[index].content
                ? listAnswers[index].content
                : e.target.id === value.ID
                ? e.target.value
                : null);
        });
    }

    //save question to Redux
    function hanldeAddQuestion() {
        const newExam = {
            number: parseInt(questionNumber),
            point: parseInt(point),
            question: valueQuestionQuill,
            urlImg: null,
            urlVideo: null,
            isMulipleChoiceAnswer: isMuilpleChoieAnswer,
            multileChoieAnswers: listAnswers, // list cau tra loi cua de
            answer: null, //answers of student
            correctAnswer: {
                multileChoieAnswers: idCorrectAnswer,
                explain: valueAnswerQuill,
                urlParem: null,
            },
        };
        const action = addNewQuestion(newExam);
        dispatch(action);
        history.push("/tao-cau-hoi/" + (parseInt(questionNumber) + 1));
        //setQuestionNumber(questionNumber + 1);
        // setValueQuestionQuill('');
        // setValueAnswerQuill('');
        // setIdCorrectAnswer('');
        // setListAnswer([{ ID: "A", content: null }, { ID: "B", content: null },]);
        // setPoint(0);
        // setIsMuilpleChoieAnswer(false);
        // setQuestionNumber(questionNumber + 1);
    }

    function handlePreviousQuestion() {
        history.push("/tao-cau-hoi/" + (parseInt(questionNumber) - 1));
        //setQuestionNumber(questionNumber - 1);
    }
    return (
        <div>
            <div className="form-row my-2 border-bottom border-dark">
                <label className=" my-2 label form-group col-1 text-danger">
                    Điểm
                </label>
                <input
                    className="form-control form-group col-2"
                    onChange={(e) => {
                        setPoint(e.target.value);
                    }}
                    type="number"
                    placeholder="Điểm của câu hỏi"
                    defaultValue={0}
                />
            </div>
            <div className="my-2">
                <label className="label">Câu {questionNumber}:</label>
                <div
                    className="form-group"
                    dangerouslySetInnerHTML={{ __html: valueQuestionQuill }}
                />
                <Quill
                    setValueQuill={setValueQuestionQuill}
                    placeHolder="Nội dung câu hỏi"
                ></Quill>
            </div>
            <div className="my-4 py-3 border-bottom border-dark ">
                <div className="form-check ">
                    <input
                        className="form-check-input"
                        type="radio"
                        name="exampleRadios"
                        id="exampleRadios1"
                        value={true}
                        onClick={(e) => {
                            setIsMuilpleChoieAnswer(e.target.value);
                        }}
                    />
                    <label
                        className="form-check-label"
                        htmlFor="exampleRadios1"
                    >
                        Câu trả lời trắc nghiệm
                    </label>
                </div>
                {listAnswers.map(function (value, index) {
                    return (
                        <div className="my-2" key={index}>
                            <Answer
                                remove={removeAnswer}
                                value={value.ID}
                                getContent={handleGetContent}
                                setCorrect={setIdCorrectAnswer}
                            ></Answer>
                        </div>
                    );
                })}
                <button className="btn-one" onClick={addAnswer}>
                    <strong>+</strong>
                </button>
            </div>
            <div className="my-4">
                <div className="form-check">
                    <input
                        className="form-check-input"
                        type="radio"
                        name="exampleRadios"
                        id="exampleRadios2"
                        value={false}
                        onClick={(e) => {
                            setIsMuilpleChoieAnswer(!e.target.value);
                        }}
                    />
                    <label
                        className="form-check-label"
                        htmlFor="exampleRadios2"
                    >
                        Câu trả lời tự luận
                    </label>
                </div>
                <label className="form-check-label my-4">
                    Hướng dẫn giải đề:
                </label>
                <div
                    className="form-group"
                    dangerouslySetInnerHTML={{ __html: valueAnswerQuill }}
                />
                <Quill
                    setValueQuill={setValueAnswerQuill}
                    placeHolder="Nội dung hướng dẫn giải đề"
                ></Quill>
            </div>
            <div className="btn-group" role="group" aria-label="group button">
                <button
                    type="button"
                    className="btn-one mx-2"
                    style={{ width: "145px" }}
                    onClick={handlePreviousQuestion}
                >
                    <i className="bi bi-arrow-left mr-2"></i>Câu trước
                </button>
                <button
                    type="button"
                    className="btn-one mx-2"
                    style={{ width: "145px" }}
                    onClick={handlePreviousQuestion}
                >
                    Câu sau<i className="bi bi-arrow-right ml-2"></i>
                </button>
                <button
                    type="button"
                    className="btn-one mx-2"
                    onClick={hanldeAddQuestion}
                >
                    <i className="bi bi-plus mr-2"></i>Thêm câu hỏi
                </button>
                <button
                    type="button"
                    className="btn-one mx-2"
                    onClick={handleSuccess}
                    style={{ width: "145px" }}
                >
                    <i className="bi bi-check mr-2"></i>Xem trước
                </button>
            </div>
        </div>
    );
}
