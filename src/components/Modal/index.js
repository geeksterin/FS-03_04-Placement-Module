import React from "react";
import "./modal.css";

const Modal = ({ showModal, onClose }) => {
  return (
    <div className={`modal-wrapper ${showModal ? "show-modal" : ""}`}>
      <div className="modal-inner">
        This is modal
        <button className="button" onClick={onClose}>
          Ok
        </button>
      </div>
    </div>
  );
};

export default Modal;
