import React from 'react'
import { Dropdown, DropdownButton, FormControl, InputGroup } from 'react-bootstrap'
import './Style.css'

const STYLES = ['inputDropdown--primary', 'inputDropdown--secondary', 'inputDropdown--tertiary']
const SIZES = ['inputDropdown--large', 'inputDropdown--medium', 'inputDropdown--small']

const WpInputDropdown = ({placeholder, inputDropdownStyle, inputDropdownSize}) => {
    const checkInputDropdownStyle = STYLES.includes(inputDropdownStyle) ? inputDropdownStyle : STYLES[0]
    const checkInputDropdownSize = SIZES.includes(inputDropdownSize) ? inputDropdownSize : SIZES[0]

    return (
        <>
        <InputGroup className="">
        <DropdownButton
          as={InputGroup.Prepend}
          variant="WpDorpdown"
          title=""
          id="input-group-dropdown-1"
          className={`rounded-0 ${checkInputDropdownStyle} ${checkInputDropdownSize}`} >
            <Dropdown.Item href="#">Option 1</Dropdown.Item>
            <Dropdown.Item href="#">Option 2</Dropdown.Item>
            <Dropdown.Item href="#">Option 3</Dropdown.Item>
            <Dropdown.Item href="#">Option 4</Dropdown.Item>
            <Dropdown.Item href="#">Option 5</Dropdown.Item>
        </DropdownButton>
        <FormControl 
        placeholder={placeholder}
        aria-label={placeholder}
        aria-describedby={placeholder}
        className={`rounded-0 ${checkInputDropdownStyle} ${checkInputDropdownSize}`}
        readOnly
        />
  </InputGroup>
    </>  
    )
}

export default WpInputDropdown
