// import React from "react";
// import ReactDOM from "react-dom";
import "./index.css";
import React from "./lreact/React";
import ReactDOM from "./lreact/ReactDOM";

const jsx = (
  <div className="wrapper" data-testid="123">
    <p className="para">para</p>
    hello, world
  </div>
);
console.log(jsx);

ReactDOM.render(jsx, document.getElementById("root"));
