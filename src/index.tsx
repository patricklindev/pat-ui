import React from 'react';
import ReactDOM from "react-dom";
import App from "./App";
//Above is just for testing for now

export { default as Button } from './components/Button';
export { default as Input } from './components/Input';
export { default as Icon } from './components/Icon';
export { default as Message } from './components/Message';
export { default as Card } from './components/Card';
export { default as Dropdown } from './components/Dropdown';
export { default as Progress } from './components/Progress';
export { default as Slider } from './components/Slider';

//Below just for testing for now
const rootElement = document.getElementById("root");
ReactDOM.render(
    <App />,
  rootElement
);