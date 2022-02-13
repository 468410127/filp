import React, { useState, useEffect, useContext, useRef, useLayoutEffect } from 'react';
import '../../App.css';

const uuid = () => {
  const buf = new Uint32Array(4);
  window.crypto.getRandomValues(buf);
  let idx = -1;
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c){
    idx++;
    const r = (buf[idx >> 3] >> ((idx%8)*4))&15;
    const v = c == 'x' ? r : (r&0x3|0x8);
    return v.toString(16);
  });
}


const AnimatesContext = React.createContext({} as any);
const Animates = (props: any) => {
  const { animation = false, interval = 100, children, } = props;
  const [animations, setAnimations] = useState({});
  const animationsRef = useRef(new Map());
  useEffect(() => {
    let counter = 0;
    const temp:any = {};
    const values = animation ? [...animationsRef.current.values()]:
    [...animationsRef.current.values()].reverse();
    console.log(values, "values")
    values.forEach((value) => {
      temp[value.ID] ={ delay: counter * interval, animation}
      counter += 1;
    })
    setAnimations(temp)
  }, [animation]);
  return (
    <AnimatesContext.Provider  value={{
      animations,
      animationsRef
    }}>
    <>{ children}</>
    </AnimatesContext.Provider>
  )
}

const Animate = (props: any) => {
  const {animation: _animation = false, delay: _delay = 0,
  transitionStyles = {
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  }, children } = props;
  const { animations, animationsRef } = useContext(AnimatesContext);
  const ID = useRef(uuid());
  const [animation, setAnimation] = useState(_animation);
  const [delay, setDelay] = useState(_delay);
  const [status, setStatus] = useState(() => {
    if(animation) return 'enter';
    else return 'leave';
  });
  useEffect(() => animationsRef.current.set(ID.current, {...props, ID:
  ID.current}), []);
  useEffect(() => setAnimation(_animation), [_animation]);
  useEffect(() => {
    if (animations[ID.current]) {
      const { animation, delay } = animations[ID.current]
      setAnimation(animation)
      setDelay(delay)
    }
  }, [animations]);
  useEffect(() => setStatus(animation ? 'enter': 'leave'), 
  [animation]);
  const prevStyle = children?.props?.style || {};
  console.log(prevStyle, "prevStyle");
  const animateStyle = transitionStyles[status];
  const transitionStyle = { transition: `all 300ms ease-in-out ${delay}ms`};
  const styles = { ...prevStyle, ...animateStyle, ...transitionStyle};
  return React.cloneElement(React.Children.only(<div></div>), {
    style: {
      ...styles,
    },
  })

  
}

let catchRect:any = {};
let catchAnimation:any = {};
const App2 = () => {
  const selfRef = useRef({} as any);
  const first = useRef(true);
  const [active, setActive] = useState(false);
  useEffect(() => catchRect = selfRef.current.getBoundingClientRect(), []);
  if(catchAnimation && catchAnimation.playState === 'running') {
    catchRect = selfRef.current.getBoundingClientRect();
    catchAnimation.finish();

  }
  useLayoutEffect(() => {
    if(first.current) {
      first.current = false;
    } else {
      const nextRect = selfRef.current.getBoundingClientRect();
      const x = catchRect.x - nextRect.x;
      catchRect = nextRect;
      const effect = new KeyframeEffect(selfRef.current, [
        {
          transform: `translateX(${x}px)`
        },
        {
          transform: `translateX(0px)`
        }
      ], { fill: 'auto', duration: 4000,});
      const animation = new Animation(effect, document.timeline);
      catchAnimation = animation;
      animation.play();
    }
  })
  return (
    <div className="App2">
      <div ref={selfRef} className={active ? `box right`: `box left`}
      onClick={() => setActive((prev) => !prev)}>
      </div>
    </div>
  )
}




function Test() {
  const [list, setList] = useState([
    {id: 1, name: '小欧啦', pt: 0},
    {id: 2, name: '小欧啦2', pt: 0},
    {id: 3, name: '小欧啦3', pt: 0},
    {id: 4, name: '小欧啦4', pt: 0}
  ])
  const [play, setPlay] = useState(false);

  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     const nextList = list.map(item => {
  //       return {
  //         ...item,
  //         pt: item.pt + Math.ceil(Math.random() * 100)
  //       }
  //     })
  //     setList(nextList)
  //   }, 1000)

  //   return ()=> {
  //     clearInterval(timer)
  //   }
  // }, [])

 
  return (
    <div>

        <App2 />
      {/* {list.map(item =>{
        return <div key={item.id}>
          id: {item.id}
          name: {item.name}
          pt: {item.pt}
        </div>
      })} */}
      {/* <div className="test2"> */}
        <button onClick={() => setPlay(!play)}>切换</button>
        <Animates animation={play}>
          <Animate>
              {list.map(item =>{
            return <div key={item.id} className="item">
              id: {item.id}
              name: {item.name}
              pt: {item.pt}
            </div>
          })}
          </Animate>
        </Animates>
      {/* </div> */}
    </div>

    
  )

}

export default Test;