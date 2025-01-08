import React from "react";
import "./ModalFeedback.css";

export default function Modal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h3>Обратная связь</h3>
        <form className="feedback-form">
          <label>
            Имя:
            <input type="text" placeholder="Ваше имя" />
          </label>
          <label>
            Email:
            <input type="email" placeholder="Ваш email" />
          </label>
          <label>
            Сообщение:
            <textarea placeholder="Ваше сообщение"></textarea>
          </label>
          <div className="form-actions">
            <button type="submit" className="submit-button">
              Отправить
            </button>
            <button type="button" className="close-button" onClick={onClose}>
              Закрыть
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
