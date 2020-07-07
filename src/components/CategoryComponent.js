import React from 'react';
import { Link,Switch } from "react-router-dom";
import  styles from "../components/base.module.scss";
import {categories} from "../data";


export default function CategoryComponent(props) {
    const { value } = props.name.value.category;
    let category = "";  
    switch(value) {
        case "light":
          category = "car";
          break;
        case "apartment-sell":
          category = "buy-apartment";
          break;
          case "apartment-rent":
          category = "rent-apartment";
          break;
          case "mobile-phones":
          category = "mobile-phones";
          break;
          case "sofa-armchair":
          category = "sofa-armchair";
          break;
          case "animals":
          category = "pets-animals";
          break;
          case "personal":
          category = "personal-goods";
          break;
          case "services":
          category = "services";
          break;
          case "jobs":
          category = "jobs";
          break;
          case "tv-projector":
          category = "tv-projector";
          break;
        default:
            category ="";
      }
    const handleClick =()=>{
        props.clickHandle(category);
    }
    return (
        <div className={styles.filterItem}>
          <Link onClick={handleClick} to={`/${category}`}>
          {props.name.displayed_text} 
          </Link> 
        </div>
    )
}
