import { useState } from "react";

function App() {
  const [color, setColor] = useState("lavender");
  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="felx flex-wrap justify-center shadow-xl bg-white gap-3 px-2 py-2 rounded-2xl">
          <button
            onClick={() => setColor("red")}
            className="outline-none bg-red-700 px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "red" }}
          >
            red
          </button>{" "}
          <button
            onClick={() => setColor("blue")}
            style={{ backgroundColor: "blue" }}
            className="outline-none  px-4 py-1 rounded-full text-white shadow-lg"
          >
            blue
          </button>{" "}
          <button
            onClick={() => setColor("green")}
            style={{ backgroundColor: "green" }}
            className="outline-none  px-4 py-1 rounded-full text-white shadow-lg"
          >
            Green
          </button>{" "}
          <button
            onClick={() => setColor("orange")}
            style={{ backgroundColor: "orange" }}
            className="outline-none 600 px-4 py-1 rounded-full text-white shadow-lg"
          >
            orange
          </button>{" "}
          <button
            onClick={() => setColor("pink")}
            style={{ backgroundColor: "pink" }}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          >
            pink
          </button>{" "}
          <button
            onClick={() => setColor("yellow")}
            style={{ backgroundColor: "yellow" }}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          >
            yellow
          </button>{" "}
        </div>
      </div>
    </div>
  );
}

export default App;
