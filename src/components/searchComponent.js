import React, { useContext } from "react";
import styles from "./base.module.scss";
import "../../src/App.css";
import context from '../context';

function SearchComponent({ handleSearch }) {
  const {data} = useContext(context);
  const title = data.title ? data.title : "همه آگهی ها";
  const placeHolder = data.title ?`جستجو در ${data.title} ...` : "جستجو در همه آگهی ها ...";
  const handleSubmit = e => {
    e.preventDefault(); 
  };
  const onSearch = e => {
    let inputValue=e.target.value;
    handleSearch(inputValue);
  };

  return (
    <form className={styles.search} action="" onSubmit={handleSubmit}>
      <div className={styles.dropdown}>
        <div
          className="btnFilter btnSecondary"
          id="dropdownMenu2"
        >
          {title}
        </div>
      </div>
      <input
        type="text"
        placeholder={placeHolder}
        name="search2"
        onChange={onSearch}
        className={styles.InputSearch}
      />
    </form>
  );
}
export default SearchComponent;
