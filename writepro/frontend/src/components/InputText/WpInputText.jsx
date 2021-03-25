import React from 'react'
import { InputGroup, FormControl } from 'react-bootstrap'
import './Style.css';

const WpInputText = ({placeholder}) => {
    return (
        <InputGroup className="mb-5">
        <FormControl
            placeholder={placeholder} 
            aria-label={placeholder} 
            aria-describedby={placeholder}
            className="WpInputText rounded-0"
            />
        </InputGroup>
    )
}

export default WpInputText
