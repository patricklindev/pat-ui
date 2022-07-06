import React from 'react';
import Rating from './Rating';
import { action } from '@storybook/addon-actions';

export default {
    title: 'Rating',
    component: Rating,
  };

  export const DefaultRating = () => (
    <div>
      <div>Users  should be able to preview the rating by hovering on the ‘stars’(proper animation should be applied)</div>
      <Rating />
    </div>
  );
  
  export const DisabledRating = () => (
    <div>
      <div>Developers should be able to disable the component from props</div>
      <Rating edit={false}/>
    </div>
  );

  const labels = ['Very bad','Bad','Okay','Good','Great'];
  export const ProvideTheLabelForRating = () => (
    <div>
      <div>Developers should be able to provide the label of the component from props</div>
      <Rating labels = {labels}/>
    </div>
  );

  export const SetThePrecisionOfTheRating = () => (
    <div>
      <div>Developers should be able to set the precision of the rating component(Users can give a fraction of stars)</div>
      <Rating half={true}/>
    </div>
  );

  export const ChooseSizesOfTheRating = () => (
    <div>
      <div>Developers can choose sizes of the rating component among various predefined options from props</div>
      <br />
      <div>30px</div>
      <Rating size={30}/>
      <div>35px</div>
      <Rating size={35}/>
      <div>40px</div>
      <Rating size={40}/>
    </div>
  );

  export const DecideTheNumberOfStars = () => (
    <div>
      <div>Developers can decide the number of stars in total from props</div>
      <Rating count={3}/>
      <Rating count={6}/>
      <Rating count={9}/>
    </div>
  );

  export const ControlTheValueOfTheRating = () => (
    <div>
      <div>Developers should be able to control the value of the rating from outside of the component by providing a prop.</div>
      <Rating value={1}/>
      <Rating half={true} value={2.5}/>
      <Rating value={5}/>
    </div>
  );

  export const ListenToTheChangeOfTheRalue = () => (
    <div>
      <div>Developers should be able to listen to the change of the value of the component from outside of the component by providing the onChange callback function as a prop.</div>
      <Rating half onChange={action('New Rating is')}/>
    </div>
  );
  