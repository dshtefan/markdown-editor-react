import React, { useState } from 'react';
import './App.scss';
import InputField from "../InputField";
import Preview from "../Preview";
import Menu from "../Menu";
import marked from "marked";

const App = () => {
  const [text, setText] = useState('');

  const onChange = (event) => {
    let newText = event.target.value;
    setText(newText);
  };

  const getHtml = () => {

    console.log(marked('\n\n\r\n', {breaks: true}));
    return {
      __html: marked(text)
    }
  };

  return(
    <div id="app">
      <InputField
        value={ text }
        onChange={onChange} />
      <Preview htmlData={getHtml}/>
      <Menu/>
    </div>
  )
};

export default App;