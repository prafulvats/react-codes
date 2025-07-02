import React, { useRef, useState } from "react";
import "./Demo1.css";

const Demo1 = () => {
  //useRef implementaion  
  const [count, setCount] = useState(0);
  const countRef = useRef(0);
  let a = 0;

  console.log("State: ", count);
  console.log("Ref: ", countRef.current);

  return (
    <div className="demo1">
      <div>
        <button onClick={(e) => {
            (a = a + 1)
            console.log("let: ", a)
        }}>Change Let</button>
        <span>let : {a}</span>
      </div>
      <div>
        <button onClick={(e) => setCount(count + 1)}>Change State</button>
        <span>State : {count}</span>
      </div>
      <div>
        <button onClick={(e) => (countRef.current += 1)}>Change Ref</button>
        <span>Ref : {countRef.current}</span>
      </div>
    </div>
  );
};

export default Demo1;
