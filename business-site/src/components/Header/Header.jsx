import { useState } from "react";
import "./Header.css";
import ModalFeedback from "../ModalFeedback/ModalFeedback";

export default function Feedback() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  return (
    <header>
      <span className="logo">ВСЁ ПОД КОНТРОЛЕМ</span>
      <div className="menu">
        <button>
          <a href="">Цены</a>
        </button>
        <button>
          <a href="">Преимущества</a>
        </button>
        <button>
          <a href="">Наши проекты</a>
        </button>
        <button>
          <a href="">Контакты</a>
        </button>
        <button>
          <a href="">Сделать заказ</a>
        </button>
        <ModalFeedback isOpen={isModalOpen} onClose={toggleModal} />
      </div>
    </header>
  );
}
