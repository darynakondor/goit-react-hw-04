import style from "./ErrorMessage.module.css"

const ErrorMessage = ({error})=> {
  return (
    <p className={style.ErrorMessage}>{error}</p>
  )
}

export default ErrorMessage