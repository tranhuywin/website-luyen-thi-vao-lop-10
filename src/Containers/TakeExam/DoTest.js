import React from "react";
import Question from "../../Components/Post-the-exam/Questions";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Countdown from "react-countdown";
import { useState } from "react";
export default function DoTest() {
  const ramdomTextAnswer =
    "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium.";
  const ramdomTextQuestion =
    "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa ?";
  const [show, setShow] = useState(false);
  const Completionist = () => <span>You are good to go!</span>;
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
    
      <h2>Lorem ipsum dolor sit amet, consectetuer adipiscing elit</h2>
      <div className="my-2">
        <Question
          number="Câu 1"
          point="0.5"
          question={ramdomTextQuestion}
          multileChoieAnswers={true}
          correctAnswer="A"
        ></Question>
      </div>
      <div className="my-2">
        <Question
          number="Câu 2"
          point="0.5"
          question={ramdomTextQuestion}
          multileChoieAnswers={true}
          correctAnswer="A"
        ></Question>
      </div>
      <div className="my-2">
        <Question
          number="Câu 3"
          point="0.5"
          question={ramdomTextQuestion}
          multileChoieAnswers={false}
          correctAnswer={ramdomTextAnswer}
          isQuillAnswer={true}
        ></Question>
      </div>
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
     

<div class="position-fixed bottom-0 right-0 p-3" style={{"z-index": 5, "right": 0, "bottom": 0}}>
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
