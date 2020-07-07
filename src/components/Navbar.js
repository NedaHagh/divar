import React,{useContext,useState,useEffect} from 'react';
import logo from '../assets/images/divar.jpg';
import  styles from "../components/base.module.scss";
import context from "../context";
import { cities } from "../data";
import { MdKeyboardArrowDown } from "react-icons/md";

export default function Navbar() {
  const {handleCityModal,city} = useContext(context);
  const[cityTitle,setCityTitle] = useState();
  useEffect(() => {
    const cityFilter =cities.filter(item =>{
      if(item.eng == city)
      return true
    })
    setCityTitle(cityFilter[0].fa);
  },[city]);
    return (
        <div className={styles.navbar}>
        <a className={styles.logo} href="#"><img src={logo} alt=""/></a>
        <div className={styles.city} onClick={()=>handleCityModal(true)}><div className={styles.btnCity}><span>{cityTitle}</span>
        <span className={styles.ArrowDown}>
        <MdKeyboardArrowDown />
        </span>
        </div></div>
        <div className={styles.menuLinks}>
          <a href="#">دیوار من</a>
          <a href="#">چت</a>
          <a href="#">درباره ما</a>
          <a href="#">بلاگ</a>
          <a href="#">پشتیبانی و قوانین</a>
          <a href="#">تماس با ما</a>
          <a href="#">خروج</a>
          <div className={styles.newbutton}><a href="#">ثبت رایگان آگهی</a></div>
        </div>
      </div>
    )
}
