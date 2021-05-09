import React from 'react'
import "./InputgroupPrepend.css";
import { InputGroup, FormControl} from 'react-bootstrap'

const InputgroupPrepend = (props) => {
    return (
        <InputGroup className="m-2">
            <InputGroup.Prepend>
                <InputGroup.Text>{props.text}</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl 
            type={props.type} 
            value={props.value} 
            onChange={props.onChange}
            aria-label={props.text} />
        </InputGroup>
    );
};

export default InputgroupPrepend;
