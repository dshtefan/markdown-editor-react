import React from 'react';
import './Menu.scss';
import LinkIcon from './svg/link.svg'
import SaveIcon from './svg/save.svg'
import DownloadIcon from './svg/download.svg'

const Menu = ({ saveToLocalStorage }) => {
  return (
    <div className="menu">
      <div title={'link'}><LinkIcon/></div>
      <div
        title={'Save to local storage'}
        onClick={saveToLocalStorage}
      >
        <SaveIcon/>
      </div>
      <div title={'Save to Downloads'}><DownloadIcon/></div>
    </div>
  )
};

export default Menu;