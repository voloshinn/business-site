import "./Price.css";
import React from "react";

export default function Price() {
  return (
    <article id="price" className="price-wrapper">
      <section>
        <img src="./img-price/дом.jpg" alt="Частный дом" />
        <span className="title">Частный дом</span> <br />
        <span className="text">
          <br />
          <b>•</b> Круглосуточная безопасность дома и участка
          <br /> <br />
          <b>•</b> Онлайн-доступ к камерам с телефона
          <br /> <br />
          <b>•</b> Запись видео и уведомления о движении
          <br /> <br />
          <b>•</b> Контроль доступа для защиты семьи и имущества
          <br /> <br />
        </span>
        <button>
          <a href="#feedback">от 5 000 ₽</a>
        </button>
      </section>

      <section>
        <img src="./img-price/офис.jpg" alt="Офис" />
        <span className="title">Офисное помещение</span> <br />
        <span className="text">
          <br />
          <b>•</b> Повышение безопасности сотрудников и имущества
          <br /> <br />
          <b>•</b> Контроль рабочего процесса и дисциплины
          <br /> <br />
          <b>•</b> Предотвращение краж и мошенничества
          <br /> <br />
          <b>•</b> Улучшение сервиса и клиентского опыта
          <br />
        </span>
        <button>
          {" "}
          <a href="#feedback">от 15 000 ₽</a>
        </button>
      </section>

      <section>
        <img src="./img-price/производство.jpg" alt="Производство" />
        <span className="title">Производство</span> <br />
        <span className="text">
          <br />
          <b>•</b> Полный контроль производства <br /> 24/7
          <br /> <br />
          <b>•</b> Предотвращение хищений и несанкционированного доступа
          <br /> <br />
          <b>•</b> Повышение безопасности сотрудников и оборудования
          <br /> <br />
          <b>•</b> Анализ рабочих процессов для увеличения эффективности
          <br />
        </span>
        <button>
          <a href="#feedback">от 20 000 ₽</a>
        </button>
      </section>
    </article>
  );
}
