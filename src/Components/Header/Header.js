import './Header.css';

function Header() {
  return (
    <header>
      <div>
        <span className='logo'>Car Toyota</span>
        <ul className='nav'>
          <li>Про нас </li>
          <li>Контакты</li>
          <li>Кабинет</li>
        </ul>
      </div>
      <div className='presentation'></div>
  </header>
  );
}

export default Header;