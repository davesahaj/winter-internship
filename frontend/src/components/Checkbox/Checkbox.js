import React from 'react'
import './Checkbox.css'

const Checkbox = () => {
    return (   
    <div className="myTest custom-control custom-checkbox">
      <input type="checkbox" className="custom-control-input" id="customCheck1"/>
      <label className="custom-control-label" for="customCheck1">Check this custom checkbox</label>
    </div>
    )
}

export default Checkbox
