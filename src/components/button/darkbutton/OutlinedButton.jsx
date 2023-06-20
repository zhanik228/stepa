import '../darkbutton/OutlinedButton.css'

const OutlinedButton = (props) => {
  return (
    <button className="outlined-button">
      {props.children}
    </button>
  )
}

export default OutlinedButton