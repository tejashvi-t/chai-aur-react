import "./App.css";
import { useState } from "react";

function App() {
  const [counter, setcounter] = useState(0);

  const addValue = () => {
    setcounter(counter + 1);
  };

  const decValue = () => {
    setcounter(counter - 1);
  };

  return (
    <>
      <h1>Project 1 </h1>
      <h1>chai aur react </h1>
      <button onClick={addValue}>Increase value + </button> <br />
      <h2>counter value : {counter} </h2>
      <button onClick={decValue}>Decrease value - </button>
    </>
  );
}

export default App;
