import '../header/Header.css'
import Navbar from '../../components/navbar/Navbar'
import InputDark from '../../components/input/darkinput/InputDark'
import OutlinedButton from '../../components/button/darkbutton/OutlinedButton'
import { useState } from 'react'
import Modal from '../../components/modal/Modal'
import GreenButton from '../../components/button/greenbutton/GreenButton'

const Header = () => {
  const [isLoginModalVisible, setIsLoginModalVisible] = useState(false)
  const [isSignupModalVisible, setIsSignupModalVisible] = useState(false)

  const login = (e) => {setIsSignupModalVisible(false)
    setIsLoginModalVisible(true)
  }

  const register = () => {
    setIsLoginModalVisible(false)
    setIsSignupModalVisible(true)
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
            <OutlinedButton onClick={register}>Регистрация</OutlinedButton>
            </div>
          </div>
        </div>
      </div>
      <Modal isModalVisible={isLoginModalVisible} setIsModalVisible={setIsLoginModalVisible}>
        <section className='authentication'>
          <div className="authentication__container">
            <div className="authentication__header">
              <nav>
                <ul className="list">
                  <li className="list__item">
                    <a href="#" onClick={login} className="list__link list__link_active">Войти</a>
                  </li>
                  <li className="list__item">
                    <a href="#" onClick={register} className="list__link">Регистрация</a>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="authentication__content">
              <form action="" className='login-form'>
                <input name='email' type="text" placeholder='E-mail'/>
                <input name='password' type="text" placeholder='пароль'/>
                <GreenButton>Войти</GreenButton>
              </form>
            </div>
          </div>
        </section>
      </Modal>
      <Modal isModalVisible={isSignupModalVisible} setIsModalVisible={setIsSignupModalVisible}>
        <section className='authentication'>
          <div className="authentication__container">
            <div className="authentication__header">
              <nav>
                <ul className="list">
                  <li className="list__item">
                    <a href="#" onClick={login} className="list__link list__link_active">Войти</a>
                  </li>
                  <li className="list__item">
                    <a href="#" onClick={register} className="list__link">Регистрация</a>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="authentication__content">
              <form action="" className='login-form'>
                <input name="username" type="text" placeholder='username' />
                <input name='email' type="text" placeholder='E-mail'/>
                <input name='password' type="text" placeholder='пароль'/>
                <GreenButton>Войти</GreenButton>
              </form>
            </div>
          </div>
        </section>
      </Modal>
    </header>
  )
}

export default Header