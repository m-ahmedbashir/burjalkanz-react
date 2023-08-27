import React from "react";
import { Modal, Button } from "react-bootstrap";
const ErrorModel = ({
  isModalOpen,
  closeModal,
  title,
  description,
  handleSubmit,
}) => {
  return (
    <>
      <Modal show={isModalOpen}>
        <Modal.Header className="text-center">
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{description}</Modal.Body>
        <Modal.Footer>
          <Button
            variant="danger"
            className="pl-4 pr-4 pt-2 pb-2"
            onClick={handleSubmit}
          >
            Don't Show me Again
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ErrorModel;
