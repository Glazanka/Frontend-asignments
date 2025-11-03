import React from "react";
import "./Modal.scss";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  content: string;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, content }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
      >
        <h2>{title}</h2>
        <p>{content}</p>
        <button className="close-btn" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
