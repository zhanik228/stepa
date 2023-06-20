import '../modal/Modal.css'

const Modal = (props) => {
    return (
        <>
        {props.isModalVisible && 
            <div className="modal" onClick={e => props.setIsModalVisible(false)}>
                <div className="modal__content" onClick={e => {e.stopPropagation()}}>
                    {props.children}
                </div>
            </div>
        }
        </>
        
    )
}

export default Modal