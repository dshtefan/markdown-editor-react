import React from 'react';
import './Menu.scss';
import SaveIcon from './svg/save.svg';
import DownloadIcon from './svg/download.svg';
import OpenIcon from './svg/open.svg';

const Menu = ({ saveToLocalStorage, getFile, openFile }) => (
  <div className="menu">
    <div title={'Open file'}>
      <OpenIcon/>
      <input type="file" className="file-upload" onChange={openFile}/>
    </div>
    <div title={'Save to local storage'} onClick={saveToLocalStorage}>
      <SaveIcon/>
    </div>
    <div title={'Save to Downloads'}>
      <a href={ getFile() } download={'index'}>
        <DownloadIcon/>
      </a>
    </div>
  </div>
);

export default Menu;