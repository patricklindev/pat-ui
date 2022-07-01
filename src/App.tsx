import React from 'react';
import Slider from './components/Slider/Slider'
import './styles/index.scss'

export default function App(){
    return(
        <div className='App'>
            <h1>Default Slider</h1>
            <Slider/>
            <h2>Large slider</h2>
            <Slider sliderSize='lg'/>
            <h2>Small slider</h2>
            <Slider sliderSize='sm'/>
            <h2>Primary Slider</h2>
            <Slider sliderTheme='primary'/>
            <h2>Secondary Slider</h2>
            <Slider sliderTheme='secondary'/>
            <h2>Warning Slider</h2>
            <Slider sliderTheme='warning'/>
            <h2>Danger Slider</h2>
            <Slider sliderTheme='danger'/>
            <h2>Dark Slider</h2>
            <Slider sliderSize="lg" sliderTheme='dark'/>
            <h2>Vertical Slider</h2>
            <Slider sliderOrientation='vertical'/>

            <h2>Slider from 1-500 by 50's</h2>
            <Slider initialValue={100} min={0} max={500} step={50} />


        </div>
    )
}