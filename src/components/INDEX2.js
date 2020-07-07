import React, { useState, useEffect } from "react";
const Test = () => {
  const [value, setValue] = useState([]);
  useEffect(() => {
    // const PromiseFunc = new Promise((resolve, reject) => {
    //     try {
    //       fetch("https://api.divar.ir/v8/web-search/tehran")
    //         .then((response) => response.json())
    //         .then((data) => resolve(data));
    //     } catch (error) {
    //       reject(error);
    //     }
    //   });
    //   PromiseFunc.then(res=>
    //     setValue(res)
    //     )
    const PromiseFunc = async () => {
      try {
        const res = await fetch("https://api.divar.ir/v8/web-search/tehran");
        console.log(res.json());
      } catch (error) {
        console.log(error);
      }gt
    };
    PromiseFunc();
  }, []);
  return <div>{console.log(value)}</div>;
};
export default Test;
