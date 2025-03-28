// FeedbackSection.js
import React, { useState } from "react";
import ModalFeedback from "../ModalFeedback/ModalFeedback";
import "./FeedbackSection.css";

export default function FeedbackSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <section className="feedback-block">
      <div className="feedback-content">
        <h2>Свяжитесь с нами</h2>
        <p>
          Заполните заявку и получите бесплатный выезд и коммерческое
          предложение!
        </p>
        <button onClick={toggleModal} className="feedback-button">
          Оставить заявку
        </button>
      </div>

      {/* Передаем isOpen и onClose в Modal */}
      <ModalFeedback isOpen={isModalOpen} onClose={toggleModal} />
    </section>
  );
}
