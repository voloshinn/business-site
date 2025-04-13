import React from "react";
import "./ModalFeedback.css";
import Feedback from "../Feedback/Feedback";

export default function ModalFeedback({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-modal" onClick={onClose}>
          ×
        </button>
        <Feedback />
      </div>
    </div>
  );
}
