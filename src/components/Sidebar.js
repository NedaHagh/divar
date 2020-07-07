import React,{useContext} from "react";
import { Switch, Route,Link } from "react-router-dom";
import styles from "../../src/components/base.module.scss";
import style from '../../src/App.css';
import context from "../context";
import {dataMenuLevelTwo,dataMenuLevelThree } from "../data";
import MenuLevelOne from "../../src/menuLevelOne";
import MenuLevelTwo from "../../src/menuLevelTwo";
import MenuLevelThree from "../../src/menuLevelThree";
import DetailProducts from "../../src/components/DetailProducts";


export default function Sidebar() {
  return (
    <div>
      <div className="title">دسته بندی ها</div>
      <Switch>
      <Route path={`/`} exact>
      <div className="browse-accordion">
        <MenuLevelOne/>
      </div>
      </Route>
      {Object.keys(dataMenuLevelTwo).map((data, ind) => (
          <Route key={ind} path={`/${dataMenuLevelTwo[data].title.route}`} exact>
            <MenuLevelTwo content={dataMenuLevelTwo[data]}/>
          </Route>
        ))}

        {Object.keys(dataMenuLevelThree).map((data, ind) => (
          <Route
            key={ind}
            path={`/${dataMenuLevelThree[data].title.routeTwo}`}
            exact
          >
            <MenuLevelThree content={dataMenuLevelThree[data]} />
          </Route>
        ))}

        {Object.keys(dataMenuLevelThree).map((data, ind) =>
          dataMenuLevelThree[data].item.map(auth => (
            <Route key={ind} path={`/${auth.route}`} exact>
              <MenuLevelThree
                content={dataMenuLevelThree[data]}
                status="END-LEVEL"
              />
            </Route>
          ))
        )}
        <Route path={`test`} exact>
          <DetailProducts />
        </Route>
      </Switch>
    </div>
  );
}
