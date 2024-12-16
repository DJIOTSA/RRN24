import { useState, useEffect } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const [level, setLevel] = useState("");
  const levels = ["bronze", "silver", "gold", "platinum"];

  function add() {
    if (count >= 24) {
      alert("You can not go above 24.\n You're already a good!");
      return;
    }
    setCount(count + 1);
  }

  function subtract() {
    if (count <= 0) {
      alert("You can not go belong the 0");
      return;
    }
    setCount(count - 1);
  }

  // Mounting => When the component mounts
  // dependence array
  useEffect(() => {
    console.log("Component mounted");
  }, []);

  // is updating when component updates based on change of the count state
  useEffect(() => {
    if (count >= 5 && count < 10) {
      setLevel(levels[0]);
    }
    if (count >= 10 && count < 15) {
      setLevel(levels[1]);
    }
    if (count >= 15 && count < 20) {
      setLevel(levels[2]);
    }
    if (count >= 20 && count <= 24) {
      setLevel(levels[3]);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [count]);

  return (
    <div>
      {level == "" ? (
        <h3>You are getting started!</h3>
      ) : (
        <h3>Level: {level}</h3>
      )}
      <button onClick={subtract}>Subtract</button>
      <span>{count}</span>
      <button onClick={add}>add</button>
      <br /> <br />
    </div>
  );
}

export default Counter;
