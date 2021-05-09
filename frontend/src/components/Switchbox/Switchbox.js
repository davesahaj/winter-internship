import React from "react";
import "./Switchbox.css";

const Switchbox = () => {
  return (
    <label className="switchbox">
      <input type="checkbox" />
      <span className="slider round"></span>
    </label>
  );
};

export default Switchbox;
