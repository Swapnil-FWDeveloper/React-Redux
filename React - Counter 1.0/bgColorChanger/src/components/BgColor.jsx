import { useState } from "react";

function BgColor() {
  const [color, setColor] = useState("blue");
  let togle = () => {
    // if (color == "blue") {
    //   setColor("red");
    // } else {
    //   setColor("blue");
    // }
    setColor(color == "blue" ? "red" : "blue");
  };
  return (
    <div>
      <button
        onClick={togle}
        style={{ backgroundColor: color, color: "white" }}
      >
        {color == "blue" ? "Blue" : "Red"}
      </button>
    </div>
  );
}
export default BgColor;
