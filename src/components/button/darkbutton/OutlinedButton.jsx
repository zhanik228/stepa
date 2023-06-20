import '../darkbutton/OutlinedButton.css'

const OutlinedButton = (props) => {
  return (
    <button onClick={e => props.onClick(e)} className="outlined-button">
      {props.children}
    </button>
  )
}

export default OutlinedButton