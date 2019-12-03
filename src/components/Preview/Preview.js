import React from 'react';
import './Preview.scss';
import LeftIcon from'./svg/left.svg';
import RightIcon from'./svg/right.svg';

const Preview = ({ htmlData, onLeft, onRight }) => (
  <div className="preview">
    <div className="preview-header">
      <div id="left-icon" onClick={onLeft}>
        <LeftIcon/>
      </div>
      <div id="right-icon" onClick={onRight}>
        <RightIcon/>
      </div>
    </div>
    <div className="preview-content" dangerouslySetInnerHTML={htmlData()}/>
  </div>
);

export default Preview;