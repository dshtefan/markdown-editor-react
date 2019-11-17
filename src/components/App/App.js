import React, { useState } from 'react';
import './App.scss';
import InputField from "../InputField";
import Preview from "../Preview";
import Menu from "../Menu";
import marked from "marked";

const App = () => {
  const [text, setText] = useState('');

  const onChange = (event) => {
    setText(event.target.value);
  };

  const getHtml = () => {
    return {
      __html: marked(text)
    }
  };

  const onLeft = () => {
    document.getElementById('app').classList.add('open');
    document.getElementById('app').classList.remove('close');
  };

  const onRight = () => {
    document.getElementById('app').classList.remove('open');
    document.getElementById('app').classList.add('close');
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
      <Menu/>
    </div>
  )
};

export default App;