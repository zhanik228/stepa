import searchIcon from '../../../assets/input/DarkInput/icons8-search-48.png'
import '../darkinput/InputDark.css'

const InputDark = (props) => {
  const classes = ['search-form']
  if (props.isLong == true) {
    classes.push('search-form_long')
  }
  return (
    <form className={classes.join(' ')}>
      <button className='search-form__button' type="submit">
        <img className='search-icon' src={searchIcon} alt="search" />
      </button>
      <input className='search-form__input' placeholder={props.placeholder} type="text" />
    </form>
  )
}

export default InputDark