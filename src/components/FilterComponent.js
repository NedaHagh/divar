import React, { useContext } from 'react';
import context from "../context";
import  styles from "./base.module.scss";
import CategoryComponent from './CategoryComponent';
import HandleRouteByFilter from "./HandleRouteFilter";


export default function FilterComponent() {
    const {data,handleFilter,loading} = useContext(context);
    return (
        <div className={styles.category}> 
        {!loading && data.suggestion_list.map((item,index)=>(
            <CategoryComponent name={item} key={index}
            clickHandle={category=>handleFilter(category)}/>
        ))}
        <HandleRouteByFilter />
        </div>
    )
}
