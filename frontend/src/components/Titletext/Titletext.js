import React from "react";

const Titletext = (props) => {
  return (
    <h4
      className="font-weight-bolder text-capitalize my-3"
      style={{ color: "#3AAFA9" }}
    >
      {props.text}
    </h4>
  );
};

export default Titletext;
