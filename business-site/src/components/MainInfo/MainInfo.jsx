import './MainInfo.css'

export default function MainInfo() {
  return (
    <main>
      <div className='presentation'>
        <div className='text-and-buttons'>
          <span className='title'>ВИДЕОНАБЛЮДЕНИЕ</span> <br /> <br />
          <span className='subtitle'>Домофония, Контроль доступа, Охранные системы</span> <br /> <br />
          <button className='btn-feedback'><a href="#price">Узнать подробности</a></button>
        </div>
      </div>
    </main>
  )
}