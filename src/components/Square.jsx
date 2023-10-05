import React from "react";

const Square = (props) => {
  return (
    // <div className="mainboard">
    <div
      onClick={props.onClick}
      style={{
        border: "3px solid #006d77 ",
        height: "100px",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
        
      }}
      className="square"
    >
      <h5>{props.value}</h5>
    </div>
    // </div>
  );
};

export default Square;
