import React from 'react';
import * as ReactDOM from 'react-dom'
import Slider from './components/Slider/Slider'
import './styles/index.scss'


let app = <div>
    <h1>test</h1>
    <Slider color='secondary' setSize='sm' />
</div>

ReactDOM.render(app, document.getElementById('root'))

export { default as Button } from './components/Button';
export { default as Input } from './components/Input';
export { default as Icon } from './components/Icon';
export { default as Message } from './components/Message';
export { default as Card } from './components/Card';
export { default as Dropdown } from './components/Dropdown';
export { default as Progress } from './components/Progress';
export { default as Slider } from './components/Slider';
