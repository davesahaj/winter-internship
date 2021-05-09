import "./ButtonDark.css";
import React from "react";
import Button from 'react-bootstrap/Button';

const ButtonDark = (props) => {
  return (
    <div>
      <Button
        className="btn btn-primary btn-block btn-dark text-uppercase"
        type={props.btype}
      >
        {props.text}
      </Button>
    </div>
  );
};

export default ButtonDark;
