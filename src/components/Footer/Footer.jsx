import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* <div className="footer-section">
          <h3>Навигация</h3>
          <ul>
            <li>
              <a href="#prices">Цены</a>
            </li>
            <li>
              <a href="#advantages">Преимущества</a>
            </li>
            <li>
              <a href="#projects">Наши проекты</a>
            </li>
            <li>
              <a href="#contacts">Контакты</a>
            </li>
          </ul>
        </div> */}

        <div className="footer-section">
          <h3>Контакты и информация</h3>
          <ul>
            <li>
              <a href="tel:+79183330855">8 (918) 333-08-55</a>
            </li>
            <li>
              <a href="mailto:voloshin.as@mail.ru">voloshin.as@mail.ru</a>
            </li>
            <li>ИП Волошин Анатолий Сергеевич</li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Время работы</h3>
          <ul>
            <li>Пн—Сб: 10:00—19:00</li>
            <li>Вс: выходной</li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Адрес</h3>
          <ul>
            <li>г. Краснодар, ул. Бородинская, д. 10</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
