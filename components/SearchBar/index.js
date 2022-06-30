import styles from "./Search.module.css";

const SearchBar = ({...rest}) => {
  return (
   <div className={styles.coin_search}>
      <input className={styles.coin_input} {...rest}></input>
   </div>
  )
}

export default SearchBar