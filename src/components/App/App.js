import React, { useState, useEffect, useRef } from 'react';
import './App.scss';
import InputField from "../InputField";
import Preview from "../Preview";
import Menu from "../Menu";
import marked from "marked";

const App = () => {
  const [text, setText] = useState('');
  const [checkingLocalStorage, setCheckingLocalStorage] = useState(true);
  const appEl = useRef(null);

  useEffect(() => {
    if (checkingLocalStorage) {
      const newText = localStorage.getItem('text');
      setText(newText ? newText : '');
      setCheckingLocalStorage(false);
    }
  }, [ checkingLocalStorage ]);

  const onChange = (event) => {
    setText(event.target.value);
  };

  const getHtml = () => {
    return {
      __html: marked(text)
    }
  };

  const onLeft = () => {
    appEl.current.classList.add('tab--open');
    appEl.current.classList.remove('tab--close');
  };

  const onRight = () => {
    appEl.current.classList.remove('tab--open');
    appEl.current.classList.add('tab--close');
  };

  const saveToLocalStorage = () => {
    localStorage.setItem('text', text);
  };

  const getFile = () => {
    return (
      URL.createObjectURL(
        new Blob([getHtml().__html], {type: 'text/plain'})
      )
    )
  };

  return(
    <div id="app" className={'app'} ref={appEl}>
      <InputField
        value={ text }
        onChange={onChange} />
      <Preview
        htmlData={getHtml}
        onLeft={onLeft}
        onRight={onRight} />
      <Menu
        getFile={getFile}
        saveToLocalStorage={saveToLocalStorage}/>
    </div>
  )
};

export default App;