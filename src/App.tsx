import React from 'react';
import Slider from './components/Slider/Slider'

export default function App(){
    return(
        <div className='App'>
            <h1>Default Slider</h1>
            <Slider/>
            <h2>Large slider</h2>
            <Slider sliderSize='lg'/>
            <h2>Small slider</h2>
            <Slider sliderSize='sm'/>

        </div>
    )
}