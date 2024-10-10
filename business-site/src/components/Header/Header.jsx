import './Header.css'

export default function Feedback() {
  return (
    <header>
      <span className="logo">ВСЁ ПОД КОНТРОЛЕМ</span>
      <div className='menu'>
        <button><a href="">Цены</a></button>
        <button><a href="">Преимущества</a></button>
        <button><a href="">Наши проекты</a></button>
        <button><a href="">Контакты</a></button>
        <button><a href="">Сделать заказ</a></button>
      </div>
    </header>
  )
}