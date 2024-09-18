import style from "./LoadMoreBtn.module.css"
const LoadMoreBtn =({loadMorePhotos})=> {
  return (
      <div className={style.btnContainer}>
        <button className={style.btn} onClick={loadMorePhotos}>Load More</button>
      </div>
  )
}

export default LoadMoreBtn