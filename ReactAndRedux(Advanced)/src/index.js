import React from "react";
import { render } from "react-dom";

function Hi() {
  return <div>HEY!!!</div>;
}

render(<Hi />, document.getElementById("app"));
