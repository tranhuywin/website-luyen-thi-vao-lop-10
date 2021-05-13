import Modal from "react-bootstrap/Modal";

const VerticallyCenteredModal = (props) => {
    return (
        <Modal
            {...props}
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title >
                    {props.heading}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>
                    {props.body}
                </p>
            </Modal.Body>
            <Modal.Footer>
                <button className='btn-two' onClick={props.onHide}><i class="bi bi-x-circle"></i> {props.textClose}</button>
                <button className='btn-one' onClick={props.onSubmit}>{props.textSubmit}</button>
            </Modal.Footer>
        </Modal>
    );
}

export default VerticallyCenteredModal
