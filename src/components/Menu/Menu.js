import React from 'react';
import './Menu.scss';
import LinkIcon from './svg/link.svg'
import SaveIcon from './svg/save.svg'
import DownloadIcon from './svg/download.svg'

const Menu = () => {
  return (
    <div className="menu">
      <div><LinkIcon/></div>
      <div><SaveIcon/></div>
      <div><DownloadIcon/></div>
    </div>
  )
};

export default Menu;