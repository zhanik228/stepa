import '../navbar/Navbar.css'

const Navbar = () => {
  return (
    <nav>
      <ul className="menu">
        <li className="menu__item">
          <a href="#" className="menu__link">Каталог</a>
        </li>
        <li className="menu__item">
          <a href="#" className="menu__link">Преподавание</a>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar