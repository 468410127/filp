import React, { useState, useRef, useEffect } from "react";
import "../../App.css";
import Transition from "./Transition";
import Observer from "./Observer";
import Transitions from "./Transitions";
import Flip from "./Flip";
import Flips from "./Flips";
import ShushuDemo from "../shushu/Demo";
import AnimationNumber from "../shushu/AnimationNumber";
import data from "../../mock";
import { Img, HomeWrapper, FlipListItem} from '../../styles'
interface valueProps {
  displayName: string;
  picture: string;
  score: number;
  userID: string;
}

function App() {

  const [exampleList, setExampleList] = useState([
    {
      key: 1,
      name: 'yuzura hanyou1',
      pt: 0,
      id: 1
    },
    {
      key: 2,
      name: 'yuzura hanyou2',
      pt: 0,
      id: 2
    },
    {
      key: 3,
      name: 'yuzura hanyou3',
      pt: 0,
      id: 3
    },
    {
      key: 4,
      name: 'yuzura hanyou4',
      pt: 0,
      id: 4
    },

  ])
  
  const [list, setList] = useState(data);
  function compare(array: string) {
    return function (obj1: any, obj2: any) {
      var value1 = obj1[array];
      var value2 = obj2[array];
      return value2 - value1;
    };
  }
  var test2 = list.sort(compare("score"));
  var test3 = exampleList.sort(compare("pt"));
  console.log(test2);
  useEffect(() => {
    const timer = setInterval(() => {
      const exampleNextList = exampleList.map(item => {
        return {
          ...item,
          pt: item.pt + Math.ceil(Math.random() * 100)
        }
      })

      const nextList = list.map(item => {
        return {
          ...item,
          score: item.score + Math.ceil(Math.random() * 100)
        }
      })
      console.log(nextList, 'nextList');
      setList(nextList)

      setExampleList(exampleNextList);
    }, 2000)
    return ()=> {
      clearInterval(timer)
    }
  }, [])

  return (
    <HomeWrapper>
     
      <Flips name="flip1" wrap="ul">
        {list.map((item, index) => {
          return (
            <Flip key={item.userID}>
              <FlipListItem data-flip-id={item.userID}>
              <img src={item.picture} alt=""  className="flip1-list-item-img" />
                id: {index + 1}, name: {item.displayName}, pt: 
                <AnimationNumber value={item.score}></AnimationNumber>
              </FlipListItem>
            </Flip>
          );
        })}
      </Flips>
      <h4>example</h4>

      <Flips name="flip1" wrap="ul">
        {exampleList.map((item, index) => {
          return (
            <Flip key={item.id}>
              <li data-flip-id={item.id} className="flip1-list-item">
                id: {index + 1}, name: {item.name}, pt: {item.pt}
              </li>
            </Flip>
          );
        })}
      </Flips>
      
    </HomeWrapper>
  );
}

export default App;
