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
      <br />
      <div>Default rating - size: 30px, total stars number: 5, initial rating value: 0</div>
      <Rating />
    </div>
  );
  
  export const DisabledRating = () => (
    <div>
      <div>Developers should be able to disable the component from props</div>
      <br />
      <div>This one now is disable</div>
      <Rating edit={false}/>
      <div>Also this one</div>
      <Rating value={2} edit={false}/>
    </div>
  );

  const labels = ['Very bad','Bad','Okay','Good','Great'];
  const labels2 = ['Very bad','Very bad+','Bad','Bad+','Okay','Okay+','Good','Good+','Great','Great+'];
  export const ProvideTheLabelForRating = () => (
    <div>
      <div>Developers should be able to provide the label of the component from props</div>
      <br />
      <div>FirstLabels = ['Very bad','Bad','Okay','Good','Great']</div>
      <Rating labels = {labels}/>
      <div>For half-star, SecondLabels = ['Very bad','Very bad+','Bad','Bad+','Okay','Okay+','Good','Good+','Great','Great+']</div>
      <Rating half={true} labels = {labels2}/>
    </div>
  );

  export const SetThePrecisionOfTheRating = () => (
    <div>
      <div>Developers should be able to set the precision of the rating component(Users can give a fraction of stars)</div>
      <br />
      <div>Default half-star rating</div>
      <Rating half={true}/>
      <div>Also half-star, but initial rating value is 2.5</div>
      <Rating value={2.5} half={true}/>
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
      <br />
      <div>Total stars number: 3</div>
      <Rating count={3}/>
      <div>Total stars number: 6</div>
      <Rating count={6}/>
      <div>Total stars number: 9</div>
      <Rating count={9}/>
    </div>
  );

  export const ControlTheValueOfTheRating = () => (
    <div>
      <div>Developers should be able to control the value of the rating from outside of the component by providing a prop.</div>
      <br />
      <div>Initial rating value: 1</div>
      <Rating value={1}/>
      <div>Initial rating value: 2.5</div>
      <Rating half={true} value={2.5}/>
      <div>Initial rating value: 5</div>
      <Rating value={5}/>
    </div>
  );

  export const ListenToTheChangeOfTheRalue = () => (
    <div>
      <div>Developers should be able to listen to the change of the value of the component from outside of the component by providing the onChange callback function as a prop.</div>
      <br />
      <div>Click star, return new rating value</div>
      <Rating half onChange={action('New Rating is')}/>
    </div>
  );
  