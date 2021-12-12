import React from 'react';
import {action} from '@storybook/addon-actions';
import Slider from './Slider';

export default {
    title: 'Slider',
    component: Slider,
};

export const DefaultSlider = () => (
    <Slider onChange={action("Thumb slider was moved")}/>
)

export const DiffSizeSlider = () => (
    <div>
        <Slider
            sliderSize='sm'
            onChange={action("Small slider was moved")}
        />
        <Slider
            sliderSize='md'
            onChange={action("Medium slider was moved")}
        />
        <Slider
            sliderSize='lg'
            onChange={action("Large slider was moved")}
        />
    </div>
)

export const DiffSizeThumb = () => (
    <div>
        <Slider
            thumbSize='sm'
            onChange={action("Small thumb slider was moved")}
        />
        <Slider
            thumbSize='md'
            onChange={action("Medium thumb slider was moved")}
        />
        <Slider
            thumbSize='lg'
            onChange={action("Large thumb slider was moved")}
        />
    </div>
)

export const DiffOrientation = () => (
    <div style={{height: "7rem", display: "flex", alignItems: "center"}}>
        <Slider
            sliderOrientation='horizontal'
            onChange={action("Horiztonal slider was moved")}
        />
        <Slider
            sliderOrientation='vertical'
            onChange={action("Vertical slider was moved")}
        />
    </div>
)

export const DiffTypeSlider = () => (
    <div>
        <Slider
            sliderTheme='primary'
            onChange={action("Primary slider was moved")}
        />
        <Slider 
            sliderTheme='secondary'
            onChange={action("Secondary slider was moved")}
        />
        <Slider 
            sliderTheme='success'
            onChange={action("Success slider was moved")}
        />
        <Slider 
            sliderTheme='info'
            onChange={action("Info slider was moved")}
        />
        <Slider 
            sliderTheme='warning'
            onChange={action("Warning slider was moved")}
        />
        <Slider 
            sliderTheme='danger'
            onChange={action("Danger slider was moved")}
        />
        <Slider 
            sliderTheme='light'
            onChange={action("Light slider was moved")}
        />
        <Slider 
            sliderTheme='dark'
            onChange={action("Dark slider was moved")}
        />
    </div>
)

export const DiffTypeThumb = () => (
    <div>
        <Slider
            thumbTheme='primary'
            onChange={action("Primary thumb was moved")}
        />
        <Slider 
            thumbTheme='secondary'
            onChange={action("Secondary thumb was moved")}
        />
        <Slider 
            thumbTheme='success'
            onChange={action("Success thumb was moved")}
        />
        <Slider 
            thumbTheme='info'
            onChange={action("Info thumb was moved")}
        />
        <Slider 
            thumbTheme='warning'
            onChange={action("Warning thumb was moved")}
        />
        <Slider 
            thumbTheme='danger'
            onChange={action("Danger thumb was moved")}
        />
        <Slider 
            thumbTheme='light'
            onChange={action("Light thumb was moved")}
        />
        <Slider 
            thumbTheme='dark'
            onChange={action("Dark thumb was moved")}
        />
    </div>
)

