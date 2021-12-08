import React from 'react';
import ReactDOM from "react-dom";
import App from "./App";

export { default as Button } from './components/Button';
export { default as Input } from './components/Input';
export { default as Icon } from './components/Icon';
export { default as Message } from './components/Message';
export { default as Card } from './components/Card';
export { default as Dropdown } from './components/Dropdown';
export { default as Slider } from './components/Slider';


const rootElement = document.getElementById("root");
ReactDOM.render(
    <App />,
  rootElement
);
