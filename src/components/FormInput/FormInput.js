import React from "react"

import "./FormInput.scss"

const FormInput = ({ handleChange, label, ...otherProps }) => (
  <div className="group">
    <input type="text" className="form-input" onChange={handleChange} {...otherProps} />
    
  </div>
)