import React from "react";
import "./App.css";
import { useState } from "react";
import { useEffect } from "react";


const App = () => {
  const [counter, setCounter] = useState(0);
  const colors = [
    "red",
    "blue",
    "green",
    "yellow",
    "purple",
    "orange",
    "pink",
    "brown",
    "gray",
    "black",
  ];
  const [colorChange ,setColorChange] = useState("red");

  const handleIncr = () => {
    setCounter(counter + 1);
  };

  const handleDecr = () => {
    setCounter(counter - 1);
  };

  useEffect(() => {
    // mounting , unmounting , update -lifecycle of component
    //  we pass a callback and a list
    // 1.execueted when the compinent is mounted for the first time
    // []depedency list [] if there and if it value is  changed then it will execute
    let unitvalue = counter % 10; 
    setColorChange(colors[unitvalue]);


  }, [counter]);

  return (
    <div className="div" style= {{ backgroundColor : colorChange}}>
      <h1 className="counter">Counter</h1>
      <button className="incr" onClick={handleIncr}>
        Increment
      </button>

      <button className="incr" onClick={handleDecr}>
        Decrement
      </button>
      <p className="para">counter: {counter} </p>
      
    </div>
  );
};

export default App;
