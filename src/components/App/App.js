import React, { useState, useEffect, useRef } from 'react';
import './App.scss';
import TextField from "../TextField";
import Preview from "../Preview";
import Menu from "../Menu";
import { getHtml, saveToLocalStorage, createFile, openFile, closeTab, openTab } from "../../utils";

const App = () => {
  const [text, setText] = useState('');
  const [isTabOpen, setIsTabOpen] = useState(false);
  const appEl = useRef(null);

  useEffect(() => {
    const newText = localStorage.getItem('text');
    setText(newText ? newText : '');
  }, []);

  const onChange = (event) => {
    setText(event.currentTarget.value);
  };

  return (
    <div id="app" className={'app'} ref={appEl}>
      <TextField
        value={ text }
        onChange={ onChange } />
      <Preview
        htmlData={ () => getHtml(text) }
        openTab={ () => openTab(appEl, setIsTabOpen) }
        closeTab={ () => closeTab(appEl, setIsTabOpen) }
        isTabOpen={ isTabOpen } />
      <Menu
        getFile={ () => createFile(text) }
        saveToLocalStorage={ () => saveToLocalStorage(text) }
        openFile={ (evt) => openFile(evt, setText) } />
    </div>
  );
};

export default App;