import { Button } from "@mui/material"
import { createPortal } from "react-dom"
import './Modal.scss'

const Modal= ({setShowModal}) => {
    return createPortal(
        <div className="modalSucses">
            <div className="modalSucses__block">
                <Button className='main__closeModal' onClick={() => setShowModal(false)}>закрыть</Button>
                <div className="modalSucses__info">
                    <p>Сотрудник создан</p>
                </div>
            </div>
        </div>, document.body
    )
}

export default Modal