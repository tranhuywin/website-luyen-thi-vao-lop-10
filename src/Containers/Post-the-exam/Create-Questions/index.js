import { useState } from "react";
import Quill from "../../../Components/Post-the-exam/Quill";
import Answer from "../../../Components/Post-the-exam/CreateMultipleChoiceAnswer";
import { useHistory, useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { addNewQuestion } from "../../../actions/exam";
import FiltermathSigns from './FiltermathSigns';
import Toast from '../../../Components/Toast-react-bootstrap';

export default function CreateQuestion() {
    handleRefresh();
    const exam = useSelector((state) => state.exam);
    let { questionNumber } = useParams();

    let valueQuestionQuillInit = null;
    let valueAnswerQuillInit = null;
    let idCorrectAnswerInit = null;
    let pointInit = 0;
    let listAnswersInit = [
        { ID: "A", content: null },
        { ID: "B", content: null },
    ];
    let isMuilpleChoieAnswerInit = false;

    if (questionNumber && exam.listQuestions[parseInt(questionNumber) - 1]) {
        valueQuestionQuillInit = exam.listQuestions[parseInt(questionNumber) - 1].question;
        valueAnswerQuillInit = exam.listQuestions[parseInt(questionNumber) - 1].correctAnswer.explain;
        idCorrectAnswerInit = exam.listQuestions[parseInt(questionNumber) - 1].correctAnswer.multileChoieAnswers;
        pointInit = exam.listQuestions[parseInt(questionNumber) - 1].point;
        isMuilpleChoieAnswerInit = exam.listQuestions[parseInt(questionNumber) - 1].isMulipleChoiceAnswer;
        if (isMuilpleChoieAnswerInit) {
            listAnswersInit = exam.listQuestions[parseInt(questionNumber) - 1].multileChoieAnswers;
        }

    }
    const [toastShow, setToastShow] = useState(false);
    const [valueQuestionQuill, setValueQuestionQuill] = useState(valueQuestionQuillInit);
    const [valueAnswerQuill, setValueAnswerQuill] = useState(valueAnswerQuillInit);
    const [idCorrectAnswer, setIdCorrectAnswer] = useState(idCorrectAnswerInit);
    const [listAnswers, setListAnswer] = useState(listAnswersInit);
    const [point, setPoint] = useState(pointInit);
    const [isMuilpleChoieAnswer, setIsMuilpleChoieAnswer] = useState(isMuilpleChoieAnswerInit);
    const [isDisablePrevBtn, setIsDisablePrevBtn] = useState(false);
    const [isDisableNextBtn, setIsDisableNextBtn] = useState(false);
    const [isDisableSaveBtn, setIsDisableSaveBtn] = useState(false);
    const [isDisablePreviewBtn, setIsDisablePreviewBtn] = useState(false);
    let history = useHistory();
    const dispatch = useDispatch();

    //handle disable prev, next button
    {
        if (parseInt(questionNumber) <= 1 && !isDisablePrevBtn) {
            setIsDisablePrevBtn(true);
        }
        if (parseInt(questionNumber) > 1 && isDisablePrevBtn) {
            setIsDisablePrevBtn(false);
        }
        if (parseInt(questionNumber) >= exam.listQuestions.length && !isDisableNextBtn) {
            setIsDisableNextBtn(true);
        }
        if (parseInt(questionNumber) < exam.listQuestions.length && isDisableNextBtn) {
            setIsDisableNextBtn(false);
        }
    }
    //handle value of title
    const titleExam = useSelector((state) => state.exam.titleExam);
    //!titleExam && history.push("/dien-thong-tin-de");

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

    //hanlde preview the exam
    function handlePreview() {
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

    //get content of answer // convert listAnswer to setListAnswer
    function handleGetContent(e) {
        listAnswers.map((value) => {
            if (e.target.id === value.ID) {
                value.content = e.target.value;
            }
        });
        setListAnswer([...listAnswers]);

    }

    //save question to Redux
    function hanldeAddQuestion() {
        history.push("/tao-cau-hoi/" + (parseInt(questionNumber) + 1));

        valueQuestionQuillInit = null;
        valueAnswerQuillInit = null;
        idCorrectAnswerInit = null;
        pointInit = 0;
        isMuilpleChoieAnswerInit = false;
        setListAnswer([
            { ID: "A", content: '' },
            { ID: "B", content: '' },
        ]);

        setValueQuestionQuill(valueQuestionQuillInit);
        setValueAnswerQuill(valueAnswerQuillInit);
        setIdCorrectAnswer(idCorrectAnswerInit);
        setPoint(pointInit);
        setIsMuilpleChoieAnswer(isMuilpleChoieAnswerInit);
    }
    function hanldSaveQuestion() {
        setToastShow(true);
        const newExam = {
            number: parseInt(questionNumber),
            point: parseInt(point),
            question: valueQuestionQuill,
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
        setTimeout(setStateToast, 3000);
    }

    function setStateToast(){
        setToastShow(false);
    }

    function handlePreviousQuestion() {
        history.push("/tao-cau-hoi/" + (parseInt(questionNumber) - 1));
        if ((parseInt(questionNumber) - 1) > 0) {
            valueQuestionQuillInit = exam.listQuestions[parseInt(questionNumber) - 2].question;
            valueAnswerQuillInit = exam.listQuestions[parseInt(questionNumber) - 2].correctAnswer.explain;
            idCorrectAnswerInit = exam.listQuestions[parseInt(questionNumber) - 2].correctAnswer.multileChoieAnswers;
            pointInit = exam.listQuestions[parseInt(questionNumber) - 2].point;
            isMuilpleChoieAnswerInit = exam.listQuestions[parseInt(questionNumber) - 2].isMulipleChoiceAnswer;
            setListAnswer([
                { ID: "A", content: '' },
                { ID: "B", content: '' },
            ]);
            if (isMuilpleChoieAnswerInit) {
                listAnswersInit = exam.listQuestions[parseInt(questionNumber) - 2].multileChoieAnswers;
                setListAnswer(listAnswersInit);
            }
            setValueQuestionQuill(valueQuestionQuillInit);
            setValueAnswerQuill(valueAnswerQuillInit);
            setIdCorrectAnswer(idCorrectAnswerInit);

            setPoint(pointInit);
            setIsMuilpleChoieAnswer(isMuilpleChoieAnswerInit);
        }
    }

    function handleNextQuestion() {
        history.push("/tao-cau-hoi/" + (parseInt(questionNumber) + 1));
        if ((parseInt(questionNumber) - 1) < exam.listQuestions.length) {
            valueQuestionQuillInit = exam.listQuestions[parseInt(questionNumber)].question;
            valueAnswerQuillInit = exam.listQuestions[parseInt(questionNumber)].correctAnswer.explain;
            idCorrectAnswerInit = exam.listQuestions[parseInt(questionNumber)].correctAnswer.multileChoieAnswers;
            pointInit = exam.listQuestions[parseInt(questionNumber)].point;
            isMuilpleChoieAnswerInit = exam.listQuestions[parseInt(questionNumber)].isMulipleChoiceAnswer;
            setListAnswer([
                { ID: "A", content: '' },
                { ID: "B", content: '' },
            ]);
            if (isMuilpleChoieAnswerInit) {
                listAnswersInit = exam.listQuestions[parseInt(questionNumber)].multileChoieAnswers;
                setListAnswer(listAnswersInit);
            }
            setValueQuestionQuill(valueQuestionQuillInit);
            setValueAnswerQuill(valueAnswerQuillInit);
            setIdCorrectAnswer(idCorrectAnswerInit);
            setPoint(pointInit);
            setIsMuilpleChoieAnswer(isMuilpleChoieAnswerInit);
        }
    }
    // console.log(FiltermathSigns);
    return (
        <div>
            <div className="form-row my-2 border-bottom border-dark">
                <label className=" my-2 label form-group col-1 text-danger">
                    ??i???m
                </label>
                <input
                    className="form-control form-group col-2"
                    onChange={(e) => {
                        setPoint(e.target.value);
                    }}
                    type="number"
                    placeholder="??i???m c???a c??u h???i"
                    value={point}
                />
            </div>
            <div className="my-2">
                <label className="label">C??u {questionNumber}:</label>

                <div
                    className="form-group"
                    dangerouslySetInnerHTML={{ __html: valueQuestionQuill }}
                />
                <FiltermathSigns valueQuill={valueQuestionQuill}></FiltermathSigns>

                <Quill
                    getValueQuill={setValueQuestionQuill}
                    setDefaultvalue={valueQuestionQuill}
                    placeHolder="N???i dung c??u h???i"
                ></Quill>
                <p className='my-2'>G?? "mathsigns(" ????? b???t ?????u nh???p k?? t??? to??n</p>
                <p className='my-2'>G?? ")" ????? k???t th??c nh???p k?? t??? to??n</p>
                <a href='http://mathquill.com/' target="_blank" rel="noreferrer">C??c c?? ph??p vi???t k?? t??? to??n</a>
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
                        C??u tr??? l???i tr???c nghi???m
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
                                defaultValue={value.content}
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
                        C??u tr??? l???i t??? lu???n
                    </label>
                </div>
                <label className="form-check-label my-4">
                    H?????ng d???n gi???i ?????:
                </label>
                <div
                    className="form-group"
                    dangerouslySetInnerHTML={{ __html: valueAnswerQuill }}
                />
                <Quill
                    getValueQuill={setValueAnswerQuill}
                    setDefaultvalue={valueAnswerQuill}
                    placeHolder="N???i dung h?????ng d???n gi???i ?????"
                ></Quill>
            </div>
       
            <Toast heading= 'Th??ng b??o' body='B???n ???? l??u th??nh c??ng' isShow={toastShow}></Toast>
            <div className="form-inline mb-3">
                <button
                    type="button"
                    className="btn-one m-2"
                    style={{ width: "145px" }}
                    onClick={handlePreviousQuestion}
                    disabled={isDisablePrevBtn}
                >
                    <i className="bi bi-arrow-left mr-2"></i>C??u tr?????c
                </button>
                <button
                    type="button"
                    className="btn-one m-2"
                    style={{ width: "145px" }}
                    onClick={handleNextQuestion}
                    disabled={isDisableNextBtn}
                >
                    C??u sau<i className="bi bi-arrow-right ml-2"></i>
                </button>
                <button
                    type="button"
                    className="btn-one m-2"
                    onClick={hanldeAddQuestion}
                >
                    <i className="bi bi-plus mr-2"></i>Th??m c??u h???i
                </button>
                <button
                    type="button"
                    className="btn-one m-2"
                    onClick={hanldSaveQuestion}
                    style={{ width: "145px" }}
                    disabled={isDisableSaveBtn}
                >
                    <i className="bi bi-save mr-2"></i>L??u
                </button>
                <button
                    type="button"
                    className="btn-one m-2"
                    onClick={handlePreview}
                    style={{ width: "145px" }}
                    disabled={isDisablePreviewBtn}
                >
                    <i className="bi bi-check mr-2"></i>Xem tr?????c
                </button>
            </div>
        </div>
    );
}
