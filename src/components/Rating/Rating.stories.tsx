import React from 'react';
import Rating from './Rating';
import { action } from '@storybook/addon-actions';

export default {
    title: 'Rating',
    component: Rating,
  };

  export const DefaultRating = () => (
    <div>
    <Rating />
    </div>
  );
  
  export const DisabledRating = () => (
    <div>
    <Rating edit={false}/>
    </div>
  );

  export const SetThePrecisionOfTheRating = () => (
    <div>
    <Rating half={true}/>
    </div>
  );

  export const ChooseSizesOfTheRating = () => (
    <div>
      <div>30px</div>
      <Rating size={30}/>
      <div>35px</div>
      <Rating size={35}/>
      <div>40px</div>
      <Rating size={40}/>
    </div>
  );

  export const ProvideTheLabelForRating = () => (
    <div>
    <Rating labels/>
    <Rating half labels/>
    </div>
  );

  export const DecideTheNumberOfStars = () => (
    <div>
    <Rating count={3}/>
    <Rating count={6}/>
    <Rating count={9}/>
    </div>
  );

  export const ControlTheValueOfTheRating = () => (
    <div>
    <Rating value={2}/>
    <Rating half={true} value={2.5}/>
    <Rating value={3}/>
    </div>
  );

  export const ListenToTheChangeOfTheRalue = () => (
    <div>
    <Rating half onChange={action('New Rating is')}/>
    </div>
  );
  