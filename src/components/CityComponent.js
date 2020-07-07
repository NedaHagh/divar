import React,{useContext} from "react";
import context from "../context";

export default function CityComponent(props) {
  const { handleSelectedCity } = useContext(context);
  return (
    <button 
  className={`cityBtn ${props.selected === props.name.eng? `activeCity` : ``}`}
  value={props.name.eng}  onClick = {(e)=>handleSelectedCity(e.target.value)}>{props.name.fa}</button>
  );
}
