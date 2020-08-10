// export {default as Button} from './components/Button';
// export {default as Rating} from './components/Rating'

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './styles/index.scss'

ReactDOM.render(

    <App />,

  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
export { default as Button } from './components/Button';
export { default as Icon } from './components/Icon';
