import React, { useState } from "react";
import SearchComponent from "../components/searchComponent";
import styles from "../components/base.module.scss";
import FilterComponent from "./FilterComponent";
import ProductComponent from "./ProductComponent";
import Sidebar from "./Sidebar";

export default function Content() {
  const [searchValue, setSearchValue] = useState(null);
  const handleSearch = (value) => {
    setSearchValue(value);
  };
  return (
    <div className="container-fluid">
    <div className="row">
      <div className="col-3">
        <aside>
            <Sidebar />
        </aside>
      </div>
      <div className="col-9">
      <div className={styles.searchField}>
        <SearchComponent handleSearch={handleSearch} />
      </div>
      <div>
      <FilterComponent />
      <ProductComponent inputValue={searchValue} />
      </div>
      </div>
    </div>
    </div>
  );
}
