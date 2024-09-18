import Modal from 'react-modal';
Modal.setAppElement('#root'); 
import style from "./ImageModal.module.css"

const ImageModal =({isOpen, onRequestClose, photoUrl})=> {
  return (
      <Modal className={style.modal} onRequestClose={onRequestClose} shouldCloseOnOverlayClick={true} isOpen={isOpen}>
        {photoUrl && <img className={style.photo} src={photoUrl} alt="Large View" />}
      </Modal>
  )
}

export default ImageModal