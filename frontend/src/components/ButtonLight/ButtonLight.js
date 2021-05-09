import "./ButtonLight.css";
import React from "react";
import Button from 'react-bootstrap/Button';

const SIZES = ['btn-nrml', 'btn-sm', 'btn-lg']

const ButtonLight = (props) => {
  const checkButtonSize = SIZES.includes(props.bSize) ? props.bSize : SIZES[0]
  return (
    <div>
      <Button
        className={`btn btn-primary btn-block btn-light ${checkButtonSize}`}
        type={props.btype}
        onClick={props.onClick}
      >
        {props.text}
      </Button>
    </div>
  );
};

export default ButtonLight;
