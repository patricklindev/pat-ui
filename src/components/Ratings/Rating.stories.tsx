import React from 'react';
import Rating from './Rating';
import './_Star.scss';
import { action } from '@storybook/addon-actions';

export default {
    title: 'Rating',
    component: Rating,
};

export const DefaultRating = () => {
    return (
        <div>
            <h5>Default Rating</h5>
            <Rating onChange={action('Rating value is')} />
        </div>
    );
};

export const DisabledRating = () => {
    return (
        <div>
            <h5>Disabled Rating</h5>
            <Rating disableHandler={true} />
        </div>
    );
};

export const LabeledRating = () => {
    return (
        <div>
            <h5>Labeled Rating</h5>
            <Rating hoverLabel={true} />
            <h5>Custom Labeled Rating</h5>
            <Rating
                customLabel={true}
                customHoverLabel={{
                    1: 'Custom HoverLabel 1',
                    2: 'Custom HoverLabel 2',
                    3: 'Custom HoverLabel 3',
                    4: 'Custom HoverLabel 4',
                    5: 'Custom HoverLabel 5',
                }}
            />
        </div>
    );
};

export const DiffSizeRating = () => {
    return (
        <div>
            <h5>Small</h5>
            <Rating starSize="sm" />
            <h5>Medium</h5>
            <Rating starSize="md" />
            <h5>Large</h5>
            <Rating starSize="lg" />
            <h5>Custom Size (width:5rem)</h5>
            <Rating customSize="5rem" />
        </div>
    );
};

export const StarCountRating = () => {
    return (
        <div>
            <h5>Star Count</h5>
            <Rating count={10} />
        </div>
    );
};

export const ControlValueRating = () => {
    return (
        <div>
            <h5>Control Value Rating</h5>
            <Rating customRatingValue={3} />
        </div>
    );
};

export const HalfStarRatingNOTDONE = () => {
    return <div></div>;
};
