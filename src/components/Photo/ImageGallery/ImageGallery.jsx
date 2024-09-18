import style from "./ImageGallery.module.css"
import ImageCard from '../ImageCard/ImageCard'

const ImageGallery = ({photos, openModal})=> {
  return (
    <ul className={style.list}>
		{
			Array.isArray(photos) && photos.map((photo)=> {
				return(
					<li className={style.item} key={photo.id}>
						<ImageCard openModal={openModal} photoSmall={photo.urls.small} photoRegular={photo.urls.regular}/>
					</li>
				)
			})
		}
	</ul>

  )
}

export default ImageGallery