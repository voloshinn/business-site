import "./WhyUs.css";

export default function WhyUs() {
  const reasons = [
    {
      id: "01.",
      title: "Сроки",
      description: "Построим систему в кратчайшие сроки без ущерба качеству.",
    },
    {
      id: "02.",
      title: "Материалы и Оборудование",
      description:
        "Используем только сертифицированное и проверенное оборудование.",
    },
    {
      id: "03.",
      title: "Проектирование",
      description: "Разработка проектов и ТЗ.",
    },
    {
      id: "04.",
      title: "Подрядчики",
      description:
        "Работаем только с квалифицированными подрядчиками, контроль каждого этапа.",
    },
    {
      id: "05.",
      title: "Гарантия до 5 лет",
      description: "Устраним любые капитальные дефекты за свой счёт.",
    },
    {
      id: "06.",
      title: "Репутация",
      description:
        "Устанавливаем и обслуживаем СВН, ОПС, СКС и СКУД более 5 лет. Работа по договору.",
    },
  ];

  return (
    <section className="why-us">
      <h2>Почему именно мы?</h2>
      <div className="reasons-grid">
        {reasons.map((reason) => (
          <div key={reason.id} className="reason-card">
            <span className="reason-number">{reason.id}</span>
            <h3>{reason.title}</h3>
            <p>{reason.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
