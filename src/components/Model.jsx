import React from "react";
import { Modal, Button } from "react-bootstrap";
const Model = ({ isModalOpen, closeModal, title, description }) => {
  return (
    <>
      <Modal show={isModalOpen} onHide={closeModal}>
        <Modal.Header>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{description}</Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            className="pl-4 pr-4 pt-2 pb-2"
            onClick={closeModal}
          >
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Model;
