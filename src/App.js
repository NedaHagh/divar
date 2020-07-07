import React, { useState, useEffect } from "react";
import context from "./context";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Navbar from "../src/components/Navbar";
import Sidebar from "../src/components/Sidebar";
import Content from "../src/components/Content";
import styles from "../src/components/base.module.scss";
import CitiesmenuComponent from "../src/components/CitiesMenuComponent";
import HandleRouteDetailProducts from "../src/components/handleRouteDetailProducts";
import Test from "../src/components/Test";

function App() {
  const [link, setLink] = useState("https://api.divar.ir/v8/web-search/tehran");
  const [citiesModal, setCitiesModal] = useState(false);
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [city, setCity] = useState("tehran");
  const [category, setCategory] = useState("");

  useEffect(() => {
    if (link) {
      fetch(link)
        .then((response) => response.json())
        .then((data) => {
          setData(data);
          setLoading(false);
        });
    }
  }, [link]);
  const handleFilter = (category) => {
    setCategory(category);
    setLink(`https://api.divar.ir/v8/web-search/${city}/${category}`);
  };
  const handleCityModal = (modalShow) => {
    setCitiesModal(modalShow);
  };
  const handleSelectedCity = (city) => {
    setCity(city);
    setLink(`https://api.divar.ir/v8/web-search/${city}/${category}`);
  };
  return (
    // <context.Provider
    //   value={{
    //     data,
    //     handleFilter,
    //     handleCityModal,
    //     handleSelectedCity,
    //     city,
    //     loading,
    //   }}
    // >
    //   <div className="container-fluid">
    //     <header className="header">
    //       <Navbar />
    //     </header>
    //     <div className="row">     
    //       <Router>
    //         <Switch>
    //           <Route path="/" exact>
    //           <Content/>
    //           </Route>
    //           <Route>
    //           <HandleRouteDetailProducts/>
    //           </Route>
    //         </Switch> 
    //       </Router>
    //       </div>
    //       <Router>
    //         {citiesModal ? <CitiesmenuComponent selected={city} /> : null}
    //       </Router>
    //     </div>
    // </context.Provider>
    <Test/>
  );
}
export default App;
