import React, { useState, useRef, useEffect } from "react";
import "../../App.css";
import Transition from "./Transition";
import Observer from "./Observer";
import Transitions from "./Transitions";
import Flip from "./Flip";
import Flips from "./Flips";
import Num from "./Num";
import ShushuDemo from "../shushu/Demo";

function App() {
  const [list, setList] = useState([
    { id: 1, name: "小欧啦", pt: 0, key: 1 },
    { id: 2, name: "小欧啦2", pt: 0, key: 2 },
    { id: 3, name: "小欧啦3", pt: 0, key: 3 },
    { id: 4, name: "小欧啦4", pt: 0, key: 4 },
  ]);

  function compare(array: any) {
    return function (obj1: any, obj2: any) {
      var value1 = obj1[array];
      var value2 = obj2[array];
      return value2 - value1;
    };
  }
  var test2 = list.sort(compare("pt"));
  console.log(test2);
  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     const nextList = list.map(item => {
  //       return {
  //         ...item,
  //         pt: item.pt + Math.ceil(Math.random() * 100)
  //       }
  //     })
  //     console.log(nextList, 'nextList');

  //     setList(nextList)
  //   }, 10000)
  //   return ()=> {
  //     clearInterval(timer)
  //   }
  // }, [])

  return (
    <div className="AppList">
      <h3 className="doc-title">排序过渡</h3>
      <ShushuDemo />
      <Flips name="flip1" wrap="ul">
        {list.map((item, index) => {
          return (
            <Flip key={item.id}>
              <li data-flip-id={item.id} className="flip1-list-item">
                id: {index + 1}, name: {item.name}, pt: <Num obj={item}></Num>
              </li>
            </Flip>
          );
        })}
      </Flips>
    </div>
  );
}

export default App;
