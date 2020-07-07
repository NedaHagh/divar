import React, { useContext } from "react";
import Card from "../components/Card";
import LoadingComponent from "../components/LoadingComponent";
import context from "../context";
import styles from "../components/base.module.scss";

export default function ProductComponent({ inputValue }) {
  const { data, loading } = useContext(context);
  const renderCard = () => {
    if (!loading) {
      var filterItems = data.widget_list.filter(item => {
          if (inputValue === null || !inputValue.length) return true;
          if (item.data.title.includes(inputValue)) return true;
          if (item.data.normal_text.includes(inputValue)) return true;
          return false;
        })
        return(<Card Items={filterItems}/>);
    } else {
       return <LoadingComponent/>
    }
  };
  return (
    <div>
      <h1 className={styles.headLine}>
        دیوار تهران - نیازمندی‌ های رایگان، آگهی‌های خرید، فروش نو و دست دوم و
        کارکرده، استخدام و خدمات
      </h1>
      <div>{renderCard()}</div>
    </div>
  );
}
