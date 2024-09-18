import { useRef } from "react";
import style from "./SearchBar.module.css"

const SearchBar = ({onSubmit, notify}) => {

  const inputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const searchInputValue = inputRef.current.value;
    onSubmit(searchInputValue);
    if(searchInputValue === '') notify();
  };
  return (
    <header className={style.header}>
      <div className="container">
        <form onSubmit={handleSubmit} className={style.headerForm}>
          <input
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            className={style.inp}
            name="searchInput"
            ref={inputRef}
          />
          <button type="submit" className={style.btn}>Search</button>
        </form>
      </div>
    </header>

  )
}

export default SearchBar