import * as React from 'react';
import {
  useState,
  useRef,
  useCallback,
  useLayoutEffect,
  useEffect
} from 'react';

interface ObjProps {
  id: number;
  name: string;
  pt: number;
  key: number;
}


interface NumProps {
  obj: ObjProps;
  wrapClass?: string;
  children?: any;
}

const fmoney = (s: string) =>{
  var l = s.split('.') [0].split('').reverse();
  var t = '';
  for (var i = 0; i < l.length; i++)  {
      t += l[i] + ((i + 1) != l.length ? '' : '');
  }
  return t.split('').reverse().join('');
};

const numberAnimation = (option:any,target:any) => {
  option=option||{};
  let $this=document.getElementById(target) || null;
  if (!$this) {
      return;
  }
  let time=option.time || 0;//总耗时
  let finalNum=option.finalNum||0; //最终的数据
  let stepTime=option.stepTime||100; //调速器，改变stepTime，可以改变数字改变的速率
  let digits=option.digits||2;//默认开始数据几位数
  let temp=String(Math.pow(10,digits)).replace("1",'');
  let l=temp.split("").reverse();
  var  t = '';
  for (var i = 0; i < l.length; i++)  {
      t += l[i] + ((i + 1) != l.length ? '' : '');
  }
  $this.innerHTML=t.split('').reverse().join('');
  let step=finalNum/(time/stepTime);
  let count=0;//计时器

  console.log(time, finalNum, stepTime, step, "tt")
  let timer=setInterval(()=>{
      count=Number(count)+step;
      if(count>=finalNum){
          clearInterval(timer);
          count=finalNum;
      }
      if (!$this) {
         return;
      }
      $this.innerHTML=fmoney(count.toString());
  },30)
}

let numberId = '10';




const Num: React.FC<NumProps> = (props) => {
  const [currentList, setCurrentList] = useState(props.obj)
  console.log(currentList)
  useEffect(() => {
    const timer = setInterval(() => {
       const nextPt = currentList.pt + Math.floor((Math.random() * 100) + 1);
       const nextList = {...currentList, pt: nextPt}
       setCurrentList(nextList)
    }, 100000)
    return ()=> {
      clearInterval(timer)
    }
  }, []);

  return (
    <span className="pt">
      <div className={'button'} onClick={() => {
        numberAnimation({time:1500,finalNum:382671,stepTime:100,digits:0},'time');
        }}>点击生产随机数字</div>
      <span id="time">{ numberId }</span>
     <div>
     {currentList.pt}
     </div>
    </span>
  )

}



export default Num;
