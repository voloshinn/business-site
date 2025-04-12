import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

import "./Header.css";
import ModalFeedback from "../ModalFeedback/ModalFeedback";

// export default function Feedback() {
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   const toggleModal = () => {
//     setIsModalOpen(!isModalOpen);
//   };
//   return (
//     <header>
//       <span className="logo">ВСЁ ПОД КОНТРОЛЕМ</span>
//       <div className="menu">
//         <button>
//           <a href="">Цены</a>
//         </button>
//         <button>
//           <a href="">Преимущества</a>
//         </button>
//         <button>
//           <a href="">Наши проекты</a>
//         </button>
//         <button>
//           <a href="">Контакты</a>
//         </button>
//         <button>
//           <a href="">Сделать заказ</a>
//         </button>
//         <ModalFeedback isOpen={isModalOpen} onClose={toggleModal} />
//       </div>
//     </header>
//   );
// }

export default function Feedback() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleModal = () => setIsModalOpen(!isModalOpen);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header>
      <span className="logo">ВСЁ ПОД КОНТРОЛЕМ</span>
      <button className="menu-icon" onClick={toggleMenu}>
        {/* {isMenuOpen ? <FiX size={30} /> : <FiMenu size={30} />} */}
      </button>
      <nav className={`menu ${isMenuOpen ? "open" : ""}`}>
        {/* <button>
          <a href="#">Цены</a>
        </button>
        <button>
          <a href="#">Преимущества</a>
        </button>
        <button>
          <a href="#">Наши проекты</a>
        </button>
        <button>
          <a href="#">Контакты</a>
        </button> */}
        {/* <button className="order-btn" onClick={toggleModal}>
          Сделать заказ
        </button> */}
      </nav>
      <ModalFeedback isOpen={isModalOpen} onClose={toggleModal} />
    </header>
  );
}
