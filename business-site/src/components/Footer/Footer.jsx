import './Footer.css'

export default function() {
  return (
    <footer>
      <div className='footer'>

        <div className="navigation">
        <span>Навигация</span>
        <ul>
          <li>Цены</li>
          <li>Преимущества</li>
          <li>Наши проекты</li>
          <li>Контакты</li>
        </ul>
        </div>

        <div>
        <span>Контакты и информация</span>
        <ul>
          <li>8 (918) 333-08-55</li>
          <li>voloshin.as@mail.ru </li>
          <li>ИП Волошин Анатолий Сергеевич</li>
        </ul>
        </div>

        <div>
        <span>Время работы</span>
        <ul>
          <li>Пн—Сб: 10:00—19:00</li>
          <li>Вс: выходной</li>
        </ul>
        </div>

        <div>
        <span>Адрес</span>
        <ul>
          <li>г. Краснодар, ул. Бородинская, д. 10</li>
        </ul>
        </div>

      </div>
    </footer>
  )
}