import React from 'react'
import "./Inputgroup.css";
import { InputGroup, FormControl} from 'react-bootstrap'

const Inputgroup = (props) => {
    return (
        <InputGroup className="m-2">
            <FormControl
            className="mr-2"
            type={props.type}
            id={props.type}
            placeholder={props.placeholder}
            aria-label={props.placeholder}
            required={props.isRequired}
             />
        </InputGroup>
    );
};

export default Inputgroup;
