import React from 'react';
import Slider from './Slider';
import { action } from '@storybook/addon-actions'
export default {
    title: 'Slider',
    component: Slider,
}

export const DefaultSlider = () => <Slider onChange={action('slider changed')}/>

export const differentColorsSliders = () => (
    <div>
        <h5>Primary</h5>
        <Slider color='primary' onChange={action('slider changed')}/>
        <br></br>
        <h5>Secondary</h5>
        <Slider color='secondary'onChange={action('slider changed')}/>
        <br></br>
        <h5>Disabled</h5>
        <Slider color='disabled'onChange={action('slider changed')}/>
    </div>
)

export const DifferentSizesSliders = () => (
    <div>
        <h5>Small</h5>
        <Slider size='small' onChange={action('slider changed')} />
        <br></br>

        <h5>Medium</h5>
        <Slider size='medium' onChange={action('slider changed')}/>
        <br></br>

        <h5>Large</h5>
        <Slider size='large' onChange={action('slider changed')}/>
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
        <Slider color='primary' mark={[20, 40, 60, 100, 200]} onChange={action('slider changed')}/>
        <br></br>

        <h5>Secondary</h5>
        <Slider color='secondary' mark={[20, 40, 60, 100, 200]} onChange={action('slider changed')}/>
    </div>

)

export const RangeSliders = () => (
    <div>
        <Slider ranged={true} onChange={action('slider changed')}/>
    </div>

)