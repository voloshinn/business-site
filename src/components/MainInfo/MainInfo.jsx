import "./MainInfo.css";

export default function MainInfo() {
  return (
    <main>
      <div className="presentation">
        <div className="text-and-buttons">
          <span className="title">Видеонаблюдение</span> <br />
          <span className="subtitle">
            Домофония, контроль доступа, охранные системы
          </span>{" "}
          <br />
          <button className="second-order-btn">
            <a href="#feedback">Отправить заявку</a>
          </button>
          <br />
          <button className="btn-feedback">
            <a href="#price">Узнать подробности</a>
          </button>
        </div>
      </div>
    </main>
  );
}
