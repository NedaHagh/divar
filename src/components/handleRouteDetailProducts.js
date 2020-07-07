import React, { useContext } from "react";
import { Route, Switch,Link } from "react-router-dom";
import context from "./../context";
import DetailProducts from "../components/DetailProducts";
import  Navbar from "../components/Navbar";
import Content from "../components/Content";

export default function HandleRouteDetailProducts() {
  const { data,handleFilter } = useContext(context);
  
  return (
    <div className="container-fluid">
      <Switch>
        {data.widget_list ? data.widget_list.map((product ,index) => (
          <Route path={`/${product.data.token}`} key={index} exact>           
            <DetailProducts  data = {product.data}/>
          </Route>
        )) : ""}
        <Route path={`/`}>
          <Content />
        </Route>
      </Switch>
    </div>
  );
}
