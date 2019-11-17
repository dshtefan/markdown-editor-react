import React from 'react';
import './App.scss';
import InputField from "../InputField";
import Preview from "../Preview";
import Menu from "../Menu";

const App = () => {
  return(
    <div id="app">
      <InputField/>
      <Preview/>
      <Menu/>
    </div>
  )
};

export default App;