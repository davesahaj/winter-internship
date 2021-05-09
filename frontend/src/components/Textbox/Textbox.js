import "./Textbox.css";
import React from "react";

const Textbox = (props) => {
  return (
    <div class="form-outline">
      <input
        type={props.ttype}
        id={props.tid}
        className="form-control custom-txtbx"
        placeholder={props.text}
        name={props.name}
        value={props.value}
        required={props.isRequired}
      />
    </div>
  );
};

export default Textbox;
