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
    </div>
);

export const DifferentValuedSliders = () => (
    <div>
        <h2>Step, Max, and Min Props</h2>
        <p>Users can use step, max, and min to set possible values of the slider</p>
        <h3>Slider from 1-500 by 50's</h3>
        <Slider initialValue={100} min={0} max={500} step={50} />
        <h3>Users can also use the showLimits prop to show the limits of the slider's range</h3>
        <Slider initialValue={100} min={0} max={500} step={50} showLimits={true} />

    </div>
);