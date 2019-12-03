import React from 'react';
import './InputField.scss';

const InputField = ({ value, onChange}) => (
  <div className="md-content">
    <textarea
      className="input-field"
      autoFocus
      value={value}
      onChange={onChange}/>
  </div>
);

export default InputField;