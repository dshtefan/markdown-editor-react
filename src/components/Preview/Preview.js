import React from 'react';
import './Preview.scss';
import LeftIcon from'./svg/left.svg';
import RightIcon from'./svg/right.svg';

const Preview = () =>{
  return (
    <div className="preview">
      <div className="preview-header">
        <div id="left-icon">
          <LeftIcon/>
        </div>
        <div id="right-icon">
          <RightIcon/>
        </div>
      </div>
      <div className="preview-content" />
    </div>
  )
};

export default Preview;