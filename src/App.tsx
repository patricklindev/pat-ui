import React from 'react';
import Slider, {slideSize} from './components/Slider/Slider'

export default function App(){
    return(
        <div className='App'>
            <h1>Default Slider</h1>
            <Slider/>
            <h2>Large slider</h2>
            <Slider sliderSize='lg'/>
            <Slider sliderSize={slideSize.Large}/>
            <h2>Small slider</h2>
            <Slider sliderSize='sm'/>
            <Slider sliderSize={slideSize.Small}/>

        </div>
    )
}