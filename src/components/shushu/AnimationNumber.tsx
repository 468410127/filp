import React, { useEffect, useState } from "react";

export default function AnimationNumber({ value }: { value: number }) {
  const [currentData] = useState({ value: 0 });
  const [timer, setTimer] = useState(0);
  const [, update] = useState({});

  // 值改变时，触发动画
  useEffect(() => {
    const differenceValue = value - currentData.value;
    const differenceValuePer = Math.ceil(differenceValue / 10);

    if (timer) {
      clearInterval(timer);
    }

    let localTimer = setInterval(() => {
      const nextValue = currentData.value + differenceValuePer;

      if (nextValue >= value) {
        currentData.value = value;
        update({});
        clearInterval(localTimer);
      } else {
        currentData.value = nextValue;
        update({});
      }
    }, 1000 / 24) as any;

    setTimer(localTimer);
  }, [value]);

  return <span>{currentData.value}</span>;
}
