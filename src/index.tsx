import React from "react";
import ReactDOM from "react-dom";
import Alert from './components/Alert/Alert';
import Button from "./components/Button";
import './styles/index.scss';

export { default as Button } from './components/Button';
export { default as Input } from './components/Input';
export { default as Icon } from './components/Icon';
export { default as Message } from './components/Message';
export { default as Card } from './components/Card';
export { default as Dropdown } from './components/Dropdown';



ReactDOM.render(
    <>
      <Alert alertSize="sm">Small Alert</Alert>
      <Alert>Default Alert</Alert>
      <Alert alertSize="lg">Large Alert</Alert>
      <br/>
      <Alert alertType="primary">Primary Default Alert</Alert>
      <Alert alertType="secondary">Secondary Default Alert</Alert>
      <Alert alertType="danger">Danger Default Alert</Alert>
    </>,
    document.getElementById("root")
  );