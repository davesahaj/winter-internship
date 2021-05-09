import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import "./InputDropdown.css";
import { InputGroup, Dropdown, DropdownButton, FormControl, MenuItem } from 'react-bootstrap'

const InputDropdown = (props) => {
  const Country = ["Afghanistan","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Bermuda","Bhutan","Brazil","Bulgaria","Cambodia","Chile","China","Colombia","Congo","Cuba","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea","Estonia","Ethiopia","Falkland Islands","Faroe Islands","Fiji","Finland","France","French Polynesia","French West Indies","Gabon","Gambia","Georgia","Germany","Ghana","Gibraltar","Greece","Greenland","Grenada","Guam","Guatemala","Guernsey","Guinea","Guinea Bissau","Guyana","Haiti","Honduras","Hong Kong","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kuwait","Kyrgyz Republic","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macau","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Mauritania","Mauritius","Mexico","Moldova","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Namibia","Nepal","Netherlands","Netherlands Antilles","New Caledonia","New Zealand","Nicaragua","Niger","Nigeria","Norway","Oman","Pakistan","Palestine","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal","Puerto Rico","Qatar","Reunion","Romania","Russia","Rwanda","Saint Pierre &amp; Miquelon","Samoa","San Marino","Satellite","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","South Africa","South Korea","Spain","Sri Lanka","St Kitts &amp; Nevis","St Lucia","St Vincent","St. Lucia","Sudan","Suriname","Swaziland","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Timor L'Este","Togo","Tonga","Trinidad &amp; Tobago","Tunisia","Turkey","Turkmenistan","Turks &amp; Caicos","Uganda","Ukraine","United Arab Emirates","United Kingdom","Uruguay","Uzbekistan","Venezuela","Vietnam","Yemen","Zambia","Zimbabwe"];
  const Language = ['English', 'Hindi', 'Gujrati', 'French', 'Spanish']
  const items = []
  if(props.text == 'Country') {
    for (const [index, value] of Country.entries()) {items.push(<Dropdown.Item eventKey={value} key={index}>{value}</Dropdown.Item>)}
  } else {
    for (const [index, value] of Language.entries()) {items.push(<Dropdown.Item eventKey={value} key={index}>{value}</Dropdown.Item>)}
  }

    return (
    <div className="my-2 ml-2">
        <InputGroup className="mb-3">
        <DropdownButton
          as={InputGroup.Prepend}
          variant="outline-secondary"
          title={props.text}
          id="input-group-dropdown-1"
          onSelect={props.onSelect}
        >
          {items}
        </DropdownButton>
        <FormControl value={props.value} aria-describedby="basic-addon1" />
      </InputGroup>
    </div>
    );
};

export default InputDropdown;