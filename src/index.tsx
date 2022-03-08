import React from "react";

import { render } from "react-dom";

import App from "./App";

const rootElement = document.getElementById("root");
render(<App />, rootElement);


export { default as Button } from './components/Button';
export { default as Input } from './components/Input';
export { default as Icon } from './components/Icon';
export { default as Message } from './components/Message';
export { default as Card } from './components/Card';
export { default as Dropdown } from './components/Dropdown';
export { default as Progress } from './components/Progress';
