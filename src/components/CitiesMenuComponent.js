import React ,{useContext ,useState} from "react";
import { MdClose } from "react-icons/md";
import CityComponent from "./CityComponent";
import context from "../context";
import Modal from 'react-bootstrap/Modal';
import { cities } from "../data";


export default function CitiesMenuComponent(props) {
  const { handleCityModal } = useContext(context);
  const [show, setShow] = useState(true);
  return (
    <Modal show={show}>
    <div className="bg-modal">
      <div className="modal-city">
        <div className="d-flex justify-content-between">
          <span className ="close p-2" onClick = {()=>handleCityModal(false)}>
            <MdClose onClick={()=>setShow(false)}/>
          </span>
          <h5 className="text-right p-2">انتخاب شهر</h5>
        </div>
        <div className="pt-5">
            <p className="text-right font-weight-bold">شهرهای پر بازدید</p>
            <div className="citiesStyle">
            {
               cities.map((city,ind)=><CityComponent key={ind} name={city} selected={props.selected}/>)
            } 
            </div>
        </div>
      </div>
    </div>
    </Modal>
  );
}
