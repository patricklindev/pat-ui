import React from 'react';
import { action } from '@storybook/addon-actions';
import Slider from './Slider';

export default {
    title: 'Slider',
    component: Slider,
};


export const DefaultSlider = () => (
    <div>
        <h2>Default Slider With Only Default Props Used</h2>
        <Slider onChange={action("Default Slider was moved")} />
    </div>
);

export const DifferentSizedSliders = () => (
    <div>
        <h2>Small Slider</h2>
        <Slider sliderSize='sm' onChange={action("Small Slider was moved")} />
        <h2>Default Slider</h2>
        <Slider onChange={action("Default Slider was moved")} />
        <h2>Large Slider</h2>
        <Slider sliderSize='lg' onChange={action("Large Slider was moved")} />
        <br></br>
        <br></br>
        <h2>Small Slider Large Thumb</h2>
        <Slider sliderSize='sm' thumbSize='lg' onChange={action("Slider was moved")} />
        <h2>Large Slider Small Thumb</h2>
        <Slider sliderSize='lg' thumbSize='sm' onChange={action("Slider was moved")} />

    </div>
);

export const DifferentThemedSliders = () => (
    <div>
        <h1>Themed Sliders</h1>
        <h2>Default Slider</h2>
        <Slider onChange={action("Default Slider was moved")} />
        <h2>Success Slider</h2>
        <Slider sliderTheme='success' onChange={action("Success Slider was moved")} />
        <h2>Secondary Slider</h2>
        <Slider sliderTheme='secondary' onChange={action("Secondary Slider was moved")} />
        <h2>Warning Slider</h2>
        <Slider sliderTheme='warning' onChange={action("Warning Slider was moved")} />
        <h2>Danger Slider</h2>
        <Slider sliderTheme='danger' onChange={action("Danger Slider was moved")} />
        <h2>Dark Slider</h2>
        <Slider sliderTheme='dark' onChange={action("Dark Slider was moved")} />
        <h2>Disabled Slider</h2>
        <Slider disabled={true} />
        <br></br>
        <br></br>
        <h1>Themed Thumbs</h1>
        <h2>Primary Thumb</h2>
        <Slider thumbTheme='primary' onChange={action("Success Slider was moved")} />
        <h2>Success Thumb</h2>
        <Slider thumbTheme='success' onChange={action("Success Slider was moved")} />
        <h2>Secondary Thumb</h2>
        <Slider thumbTheme='secondary' onChange={action("Secondary Slider was moved")} />
        <h2>Warning Thumb</h2>
        <Slider thumbTheme='warning' onChange={action("Warning Slider was moved")} />
        <h2>Danger Thumb</h2>
        <Slider thumbTheme='danger' onChange={action("Danger Slider was moved")} />
    </div>
);

export const DifferentValuedSliders = () => (
    <div>
        <h2>Tick Marks</h2>
        <p>Users can decide how many tick marks to include on the slider</p>
        <Slider ticks={2} onChange={action("Slider was moved")} />
        <Slider ticks={5} onChange={action("Slider was moved")} />

        <h2>Step, Max, Min, and InitialValue Props</h2>
        <p>Users can use step, max, and min to set possible values of the slider</p>
        <h5>Continuous Slider with custom min, max, and inital value</h5>
        <Slider initialValue={1990} min={1900} max={2022} step={1} ticks={2} onChange={action("Slider was moved")} />

        <h5>Discrete Slider from 1-30 by 10's</h5>
        <Slider initialValue={0} min={0} max={30} step={10} ticks={4} onChange={action("Slider was moved")} />
    </div>
);

export const VerticalSliders = () => (
    <div>
        <Slider sliderOrientation='vertical' initialValue={50} onChange={action("Vertical slider was moved")} />
        <Slider sliderOrientation='vertical' sliderTheme='primary' thumbTheme='danger' thumbSize='lg' onChange={action("Vertical slider was moved")} />
    </div>
)