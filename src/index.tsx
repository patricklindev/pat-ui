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
      <Alert alertSize="sm">Small Alert-Check it out</Alert>
      <Alert>Default Alert-Check it out</Alert>
      <Alert alertSize="lg">Large Alert-Check it out</Alert>
      <br/>
      <h1 style={{margin:10}}>Alert Types</h1>
      <Alert alertType="primary">Primary Default Alert-Check it out</Alert>
      <Alert alertType="secondary">Secondary Default Alert-Check it out</Alert>
      <Alert alertType="danger">Danger Default Alert-Check it out</Alert>
      <Alert alertType="warning">Warning Default Alert-Check it out</Alert>
      <Alert alertType="info">Info Default Alert-Check it out</Alert>
      <Alert alertType="success">Success Default Alert-Check it out</Alert>
    </>,
    document.getElementById("root")
  );