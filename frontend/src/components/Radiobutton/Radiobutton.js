import React from "react";
import "./Radiobutton.css";

const Radiobutton = () => {
  return (
    <div className>
      <div class="custom-control custom-radio custom-control-inline">
        <input
          type="radio"
          id="rd_1"
          name="rd"
          class="custom-control-input green"
          value="Yes"
        />
        <label class="custom-control-label" for="rd_1">
          Yes
        </label>
      </div>
      <div class="custom-control custom-radio custom-control-inline">
        <input
          type="radio"
          id="rd_2"
          name="rd"
          class="custom-control-input red"
          value="No"
        />
        <label class="custom-control-label" for="rd_2">
          No
        </label>
      </div>
    </div>
  );
};

export default Radiobutton;
