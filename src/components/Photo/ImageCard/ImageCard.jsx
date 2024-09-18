import style from "./ImageCard.module.css"

const ImageCard = ({photoSmall, photoRegular, openModal})=> {
  return (
    <div onClick={() => openModal(photoRegular)} className={style.imageContainer}>
      <img className={style.image} src={photoSmall} alt="" />
    </div>
  )
}

export default ImageCard