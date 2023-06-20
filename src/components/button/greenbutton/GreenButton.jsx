import '../greenbutton/GreenButton.css'

const GreenButton = (props) => {
    return (
        <button className="green-button">{props.children}</button>
    )
}

export default GreenButton