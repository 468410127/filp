import React, { useEffect, useState } from "react";
import AnimationNumber from "./AnimationNumber";

export default function ShushuDemo() {
  const [testValue] = useState({ value: 0 });
  const [, update] = useState({});

  useEffect(() => {
    setInterval(() => {
      addValue();
    }, 1000);
  }, []);

  return (
    <div>
      数字：
      <AnimationNumber value={testValue.value}></AnimationNumber>
      <button
        onClick={() => {
          addValue();
        }}
      >
        随机增加值
      </button>
    </div>
  );

  function addValue() {
    testValue.value += Math.ceil(1000 * Math.random());
    update({});
  }
}
