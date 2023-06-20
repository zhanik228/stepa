import '../header/Header.css'
import Navbar from '../../components/navbar/Navbar'
import InputDark from '../../components/input/darkinput/InputDark'
import OutlinedButton from '../../components/button/darkbutton/OutlinedButton'

const Header = () => {
  return (
    <header className="header">
      <div className="header__container">
        <div className="header__inner">
          <div className="header__left">
            <a href=""><h1 className='logo'>Logo</h1></a>
            <Navbar/>
          </div>
          <div className="header__right">
            <InputDark placeholder={'Поиск...'}/>
            <div className="btn-group">
            <OutlinedButton>Войти</OutlinedButton>
            <OutlinedButton>Регистрация</OutlinedButton>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header