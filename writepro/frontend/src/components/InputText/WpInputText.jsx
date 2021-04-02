import React from 'react'
import { InputGroup, FormControl } from 'react-bootstrap'
import './Style.css';

const STYLES = ['inputText--primary', 'inputText--secondary', 'inputText--tertiary']
const SIZES = ['inputText--large', 'inputText--medium', 'inputText--small']

const WpInputText = ({placeholder, inputTextStyle, inputTextSize}) => {
    const checkInputTextStyle = STYLES.includes(inputTextStyle) ? inputTextStyle : STYLES[0]
    const checkInputTextSize = SIZES.includes(inputTextSize) ? inputTextSize : SIZES[0]
    return (
        <InputGroup className="">
        <FormControl
            placeholder={placeholder} 
            aria-label={placeholder} 
            aria-describedby={placeholder}
            className={`rounded-0 ${checkInputTextStyle} ${checkInputTextSize}`}
            />
        </InputGroup>
    )
}
export default WpInputText
