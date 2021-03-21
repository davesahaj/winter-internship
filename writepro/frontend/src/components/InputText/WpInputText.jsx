import React from 'react'
import { InputGroup, FormControl } from 'react-bootstrap'

const WpInputText = ({placeholder}) => {
    return (
        <InputGroup className="mb-3">
        <InputGroup.Prepend>
            <InputGroup.Text>@</InputGroup.Text>
        </InputGroup.Prepend>
        <FormControl
            placeholder={placeholder} 
            aria-label={placeholder} 
            aria-describedby={placeholder}
            />
        </InputGroup>
    )
}

export default WpInputText
