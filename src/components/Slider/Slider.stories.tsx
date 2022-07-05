import React from 'react';
import { action } from '@storybook/addon-actions';
import Slider from './Slider';

export default {
    title: 'Slider',
    component: Slider,
};


export const DefaultSlider = () => (
    <Slider onChange={action("Slider was moved")} />
);

export const DifferentSizedSliders = () => (
    <div>
        <Slider sliderSize='sm' onChange={action("Small Slider was moved")} />
        <Slider onChange={action("Default Slider was moved")}/>
        <Slider sliderSize='lg' onChange={action("Large Slider was moved")} />
    </div>
);

export const DifferentThemedSliders = () => (
    <div>
        <h2>Primary Slider</h2>
        <Slider sliderTheme='primary' />
        <h2>Secondary Slider</h2>
        <Slider sliderTheme='secondary' />
        <h2>Warning Slider</h2>
        <Slider sliderTheme='warning' />
        <h2>Danger Slider</h2>
        <Slider sliderTheme='danger' />
        <h2>Dark Slider</h2>
        <Slider sliderTheme='dark' />
        <h2>Disabled Slider</h2>
        <Slider disabled={true}/>
    </div>
);

export const DifferentValuedSliders = () => (
    <div>
        <h2>Tick Marks</h2>
        <p>Users can decide how many tick marks to include on the slider</p>
        <Slider ticks={2}></Slider>
        <Slider ticks={5}></Slider>



        <h2>Step, Max, Min, and InitialValue Props</h2>
        <p>Users can use step, max, and min to set possible values of the slider</p>
        <h5>Slider with custom min, max, and inital value</h5>
        <Slider initialValue={1990} min={1900} max={2022} step={1} ticks={2}/>


        <h5>Slider from 1-30 by 10's</h5>
        <Slider initialValue={0} min={0} max={30} step={10} ticks={4}/>


    </div>
);