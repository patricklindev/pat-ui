import React from 'react';
import { action } from '@storybook/addon-actions';
import Slider from './Slider';



export default {
    title: 'Slider',
    component: Slider,
};

export const DefaultSlider = () => (
    <div>
        <Slider onChange={action('Moving default Slider')} />
    </div>
);

export const DifferentSizeSlider = () => (
    <div>
        <h2>sm</h2>
        <Slider sliderSize="sm" onChange={action('Moving sm-size Slider')} />
        <br />
        <h2>md</h2>
        <Slider sliderSize="md" onChange={action('Moving md-size Slider')} />
        <br />
        <h2>lg</h2>
        <Slider sliderSize="lg" onChange={action('Moving lg-size Slider')} />
    </div>
);

export const DifferentColorSlider = () => (
    <div>
        <h2>primary</h2>
        <Slider sliderColor="primary" onChange={action('Moving prime color Slider')} />
        <br />
        <h2>secondary</h2>
        <Slider sliderColor="secondary" onChange={action('Moving secondary color Slider')} />
        <br />
        <h2>default</h2>
        <Slider sliderColor="default" onChange={action('Moving default color Slider')} />
    </div>
);


export const DifferentInputModes = () => (
    <div>
        <h2>Continuous mode</h2>
        <Slider valueLabelDisplay="on" onChange={action('Moving continuous Slider')} />
        <br />
        <h2>Discrete mode</h2>
        <Slider step={5} valueLabelDisplay="on" onChange={action('Moving discrete Slider')} />
        <br />
    </div>
);

export const CustomMarksSlider = () => (
    <div>
        <h2>Customer Marks Slider</h2>
        <Slider marks={[0, 25, 50, 75, 100]} valueLabelDisplay={'on'} onChange={action('Moving custom marks Slider')} />
    </div>
);

export const RangeSlider = () => (
    <div>
        <h2>Range Slider</h2>
        <Slider rangePositions={[25, 75]} valueLabelDisplay={'on'} onChange={action('Moving range Slider')} />
        <br />
        <h2>Range Slider without Label</h2>
        <Slider rangePositions={[25, 75]} onChange={action('Moving range Slider without Label')} />
    </div>
);

export const VerticalSlider = () => (
    <div>
        <h2>Vertical Slider</h2>
        <Slider orientation='vertical' onChange={action('Moving vertical Slider')} />
        <br />
        <h2>Vertical Range Slider</h2>
        <Slider orientation='vertical' rangePositions={[25, 75]} valueLabelDisplay={'on'} onChange={action('Moving  vertical range Slider')} />
    </div>
);
export const DisabledSlider = () => <Slider disabled={true} />;
