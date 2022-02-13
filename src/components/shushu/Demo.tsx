import React, { useEffect, useState } from "react";
import AnimationNumber from "./AnimationNumber";

export default function ShushuDemo() {
  const [testValue, setTestValue] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setTestValue(testValue + Math.ceil(1000 * Math.random()));
    }, 1000);
  }, []);

  return (
    <div>
      数字：
      <AnimationNumber value={testValue}></AnimationNumber>
      <button
        onClick={() => {
          setTestValue(testValue + Math.ceil(1000 * Math.random()));
        }}
      >
        随机增加值
      </button>
    </div>
  );
}
