import React, { useContext } from "react";
import { Link } from "react-router-dom";
import context from "../src/context";
import { menuItems } from "./data";
import styles from "../src/components/base.module.scss";

export default function MenuLevelOne() {
  const {handleFilter } = useContext(context);

  return (
    <ul className={styles.filterCategoryList}>
          {menuItems.map((item, index) => (
            <li key={index}>
              <img src={item.iconUrl} alt={item.title} />
              <Link
                onClick={() => handleFilter(item.route)}
                to={`/${item.route}`}
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
  );
}
