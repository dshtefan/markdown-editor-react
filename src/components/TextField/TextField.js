import React from 'react';
import './TextField.scss';

const TextField = ({ value, onChange }) => (
  <div className="md-content">
    <textarea
      className="text-field"
      autoFocus
      value={ value }
      onChange={ onChange } />
  </div>
);

export default TextField;