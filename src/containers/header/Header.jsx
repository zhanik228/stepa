import '../header/Header.css'
import Navbar from '../../components/navbar/Navbar'
import InputDark from '../../components/input/darkinput/InputDark'
import OutlinedButton from '../../components/button/darkbutton/OutlinedButton'
import { useState } from 'react'
import Modal from '../../components/modal/Modal'

const Header = () => {
  const [isLoginModalVisible, setIsLoginModalVisible] = useState(false)
  const [isSignupModalVisible, setIsSignupModalVisible] = useState(false)

  const login = (e) => {
    setIsLoginModalVisible(true)
  }
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
            <OutlinedButton onClick={login}>Войти</OutlinedButton>
            <OutlinedButton>Регистрация</OutlinedButton>
            </div>
          </div>
        </div>
      </div>
      <Modal isModalVisible={isLoginModalVisible} setIsModalVisible={setIsLoginModalVisible}>
        fadfasd
      </Modal>
    </header>
  )
}

export default Header