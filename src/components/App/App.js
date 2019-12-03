import React, { useState, useEffect, useRef } from 'react';
import './App.scss';
import InputField from "../InputField";
import Preview from "../Preview";
import Menu from "../Menu";
import { getHtml, saveToLocalStorage, createFile, openFile } from "../../utils";

const App = () => {
  const [text, setText] = useState('');
  const appEl = useRef(null);

  useEffect(() => {
    const newText = localStorage.getItem('text');
    setText(newText ? newText : '');
  }, []);

  const onChange = (event) => {
    setText(event.currentTarget.value);
  };

  const onLeft = () => {
    appEl.current.classList.add('tab--open');
    appEl.current.classList.remove('tab--close');
  };

  const onRight = () => {
    const classes = appEl.current.classList;
    if ([...classes].filter((el) => el === 'tab--open').length === 0) return;
    classes.remove('tab--open');
    classes.add('tab--close');
  };

  return (
    <div id="app" className={'app'} ref={appEl}>
      <InputField
        value={ text }
        onChange={ onChange } />
      <Preview
        htmlData={ () => getHtml(text) }
        onLeft={ onLeft }
        onRight={ onRight } />
      <Menu
        getFile={ () => createFile(text) }
        saveToLocalStorage={ () => saveToLocalStorage(text) }
        openFile={ (evt) => openFile(evt, setText) }/>
    </div>
  );
};

export default App;