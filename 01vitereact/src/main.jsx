import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

// function MyApp() {
//   return (
//     <div>
//       <h1>custom my App</h1>
//     </div>
//   );
// }
//  the old way of react to add element/tag

// const anotherUser = "chai or react";

// const reactElement = React.createElement(
//   "a",
//   {
//     href: "https://www.facebook.com",
//     target: "_blank",
//   },
//   "click me to visit facebook",
//   anotherUser   => {using a var in old method }
// );

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
