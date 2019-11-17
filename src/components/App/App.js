import React, { useState, useEffect } from 'react';
import './App.scss';
import InputField from "../InputField";
import Preview from "../Preview";
import Menu from "../Menu";
import marked from "marked";

const App = () => {
  const [text, setText] = useState('');
  const [checkingLocalStorage, setCheckingLocalStorage] = useState(true);

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
    document.getElementById('app').classList.add('tab--open');
    document.getElementById('app').classList.remove('tab--close');
  };

  const onRight = () => {
    document.getElementById('app').classList.remove('tab--open');
    document.getElementById('app').classList.add('tab--close');
  };

  const saveToLocalStorage = () => {
    localStorage.setItem('text', text);
  };

  return(
    <div id="app" className={'app'}>
      <InputField
        value={ text }
        onChange={onChange} />
      <Preview
        htmlData={getHtml}
        onLeft={onLeft}
        onRight={onRight} />
      <Menu
        saveToLocalStorage={saveToLocalStorage}/>
    </div>
  )
};

export default App;