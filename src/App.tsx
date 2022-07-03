import React from 'react';
import Slider from './components/Slider/Slider'
import './styles/index.scss'

export default function App(){
    return(
        <div className='App'>
            <h1>Default Slider</h1>
            <Slider min={0} max={5} showLimits={true} ticks={5}/>
            <h2>Large slider</h2>
            <Slider sliderSize='lg' showLimits={true} ticks={100}/>
            <h2>Warning Slider</h2>
            <Slider sliderTheme='warning' min={10} max={20} showLimits={true}/>
            <h2>Slider from 1-500 by 50's</h2>
            <Slider initialValue={100} min={0} max={500} step={50} showLimits={true} />


        </div>
    )
}