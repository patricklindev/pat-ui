import React from "react";
import ReactDOM from "react-dom";
import Alert from './components/Alert/Alert';
import './styles/index.scss';

export { default as Button } from './components/Button';
export { default as Input } from './components/Input';
export { default as Icon } from './components/Icon';
export { default as Message } from './components/Message';
export { default as Card } from './components/Card';
export { default as Dropdown } from './components/Dropdown';



ReactDOM.render(
    <>
      <h1 style={{margin:10}}>Alert Sizes</h1>
      <Alert alertSize="sm">Small Default Alert-Check it out</Alert>
      <Alert>Default Alert-Check it out</Alert>
      <Alert alertSize="lg">Large Default Alert-Check it out</Alert>
      <br/>
      <h1 style={{margin:10}}>Alert Types</h1>
      <Alert alertType="primary">Primary  Alert-Check it out</Alert>
      <Alert alertType="secondary">Secondary  Alert-Check it out</Alert>
      <Alert alertType="danger">Danger  Alert-Check it out</Alert>
      <Alert alertType="warning">Warning  Alert-Check it out</Alert>
      <Alert alertType="info">Info  Alert-Check it out</Alert>
      <Alert alertType="success">Success  Alert-Check it out</Alert>
    </>,
    document.getElementById("root")
  );