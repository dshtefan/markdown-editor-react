import React from 'react';
import './Preview.scss';
import LeftIcon from'./svg/left.svg';
import RightIcon from'./svg/right.svg';

const Preview = ({ htmlData, openTab, closeTab, isTabOpen }) => (
  <div className="preview">
    <div className="preview-header">
      {
        !isTabOpen ?
        <div onClick={ openTab }>
          <LeftIcon/>
        </div> :
        <div onClick={ closeTab }>
          <RightIcon/>
        </div>
      }
    </div>
    <div className="preview-content" dangerouslySetInnerHTML={htmlData()}/>
  </div>
);

export default Preview;