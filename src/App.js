import React from "react";
import "./App.css";
import { useState } from "react";
import { useEffect } from "react";

// task 1
// Создать компонент в котором будет блок, инпут и кнопка, в инпут необходимо вводить цвет фона блока и по нажатию на кнопку менять цвет фона при этом очищая инпут

function App() {
  const [color1, setColor1] = useState("");

  const clickOn = (color1) => {
    setColor1();
  };
  useEffect(() => {
    setColor1(color1);
  }, [color1]);

  //Task2
  const [res, setRes] = useState("");

  console.log(res);

  function counter(res) {
    // let result = +0;
    if (res <= 18) {
      alert("Welcome!");
    }
    if (res >= 18) {
      alert("You should be 18!");
    }
    setRes(res);
  }
  useEffect(() => {
    setRes();
  }, []);

  return (
    <div className="App" align="center">
      <input
        type="text"
        value={color1}
        onChange={(e) => setColor1(e.target.value)}
      />
      <button value={color1} onClick={clickOn}>
        Change Color
      </button>
      <div style={{ backgroundColor: color1 }}>{color1}</div>
      <div>
        <input
          type="text"
          placeholder="Enter your age"
          value={res}
          onChange={(e) => setRes(e.target.value)}
        />
        <button onClick={counter}>Submit</button>
      </div>
    </div>
  );
}

export default App;
