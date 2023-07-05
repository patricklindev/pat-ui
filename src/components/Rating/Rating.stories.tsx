import React, { useState } from 'react';
import Rating from './Rating';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Rating',
  component: Rating
}

export const BasicRating = () => {
  const [value, setValue] = useState<number|null>(2);

  function handleChange(newValue: number|null) {
    setValue(newValue);
    action('onChange called')(newValue);
  }

  return (
    <div>
      <p>Rating, like any native input component, can be controlled(recommended), uncontrolled or disabled.</p>
      <br></br>
      <b>Controlled (Try it to see the Action)</b>
      <br></br>
      <Rating name='rating-controlled' value={value} onChange={handleChange}/>
      <br></br>
      <br></br>
      <b>Uncontrolled</b>
      <br></br>
      <Rating name='rating-uncontrolled' defaultValue={value} />
      <br></br>
      <br></br>
      <b>Disabled</b>
      <br></br>
      <Rating name='rating-disabled' value={value} disabled />
      <br></br>
      <br></br>
      <b>No Rating (Default)</b>
      <br></br>
      <Rating name='rating-empty'/>
    </div>
  )
}

export const Size = () => {
  return (
    <div>
      <p>Rating has three size: small(16px), medium(24px, default), large(32px)</p>
      <br></br>
      <b>Small</b>
      <br></br>
      <Rating name='rating-small' defaultValue={3} size='small' />
      <br></br>
      <br></br>
      <b>Medium (default)</b>
      <br></br>
      <Rating name='rating-medium' defaultValue={3} size='medium' />
      <br></br>
      <br></br>
      <b>Small</b>
      <br></br>
      <Rating name='rating-large' defaultValue={3} size='large' />
    </div>
  );
}

export const Max = () => {
  return (
    <div>
      <p>Tuning max to control the maximun star for ratings</p>
      <b>Max=3</b>
      <br></br>
      <Rating name='rating-max-three' max={3} defaultValue={1} />
      <br></br>
      <br></br>
      <b>Max=5 (Default)</b>
      <br></br>
      <Rating name='rating-max-five' defaultValue={3} />
      <br></br>
      <br></br>
      <b>Max=10</b>
      <br></br>
      <Rating name='rating-max-ten' max={10} defaultValue={7} />
    </div>
  );
}

export const precision = () => {
  const [value, setValue] = useState<number|null>(2.5);

  function handleChange(newValue: number|null) {
    setValue(newValue);
    action('onChange called')(newValue);
  }

  return (
    <div>
      <p>Tuning precision {'(<= 1)'} to control the maximun star for ratings</p>
      <b>Precision=0.25 (Try it to see the Action)</b>
      <br></br>
      <Rating name='rating-max-three' precision={0.25} value={value} onChange={handleChange}/>
      <br></br>
      <br></br>
      <b>Precision=0.5</b>
      <br></br>
      <Rating name='rating-max-ten' precision={0.5} defaultValue={2.5} />
      <br></br>
      <br></br>
      <b>Precision=1 (Default)</b>
      <br></br>
      <Rating name='rating-max-five' defaultValue={3} />
    </div>
  );
}