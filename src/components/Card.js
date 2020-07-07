import React from "react";
import styles from './base.module.scss';
import {Link} from "react-router-dom";
import NoImage from "../assets/images/noPicture.jpg";

function Table({Items}) {
  return (
      <div className={styles.row}>
    {Items.map(item=>{
      return(
        <Link to={`/${item.data.token}`} className={styles.cardLink}>
      <div className={styles.card}>
      <img src={item.data.image ? item.data.image : NoImage} className="card-img" alt="..." style={{width: 128 + 'px',height:128 + 'px'}}/>
      <div className={styles.cardBody} style={{textAlign:"right"}}>
        <p className={styles.cardTitle}>{item.data.title}</p>
        <p className="card-text-price">{item.data.description}</p>
        <p className="card-text"><small className="text-muted">{item.data.normal_text}</small></p>
      </div>
      </div>
      </Link>
    )})}
    </div> 
  )
}

export default Table;
