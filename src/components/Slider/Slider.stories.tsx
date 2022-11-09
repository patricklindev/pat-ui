import React from 'react';
import Slider from './Slider';

export default {
    title: 'Slider',
    component: Slider
}

export const DefaultSlider = () => <Slider />

export const SliderWithDifferentColors = () => (
    <div>
        <h5>Primary</h5>
        <Slider color='primary' />
        <h5>Secondary</h5>
        <Slider color='secondary' />
        <h5>Disabled</h5>
        <Slider color='disabled' />
    </div>
)

export const SliderWithDifferentSizes = () => (
    <div>
        <h5>Small</h5>
        <Slider size='small' onChange={e => console.log(e)} />
        <h5>Medium</h5>
        <Slider size='medium' />
        <h5>Large</h5>
        <Slider size='large' />
    </div>
)

export const DisabledSlider = () =>
(
    <div>
        <h5>Disabled</h5>
        <Slider color='disabled' disabled={true} />
    </div>

)

export const SliderWithMark = () =>
(
    <div>
        <h5>Primary</h5>
        <Slider color='primary' mark={[20, 40, 60, 100, 200]} />
        <h5>Secondary</h5>
        <Slider color='secondary' mark={[20, 40, 60, 100, 200]} />
    </div>

)

export const RangeSliders = () => (
    <div>
        <Slider ranged={true} />
    </div>

)