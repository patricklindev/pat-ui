import React from 'react';
import Rating from './Rating';

export default {
    title: 'Rating',
    component: Rating,
  };

  export const PreviewTheRating = () => (
    <div>
    Preview the rating by hovering
    <Rating />
    </div>
  );
  
  export const DisableTheRating = () => (
    <div>
    Disable the component from props
    <Rating disable/>
    </div>
  );

  const sizeArr = [30, 40, 50];
  export const ChooseSizeOfTheRating = () => (sizeArr.map(
    (size, index) => (
    <div>
      {size}px
      <Rating size={size}/> 
    </div>
  )));

  const totalNumberArr = [3, 5, 10];
  export const DicideTheNumberOfStars = () => totalNumberArr.map((totalNumber, index) => (
    <div>
     Total Number Of Stars: {totalNumber}
      <Rating totalNumber={totalNumber}/>
    </div>
  ));

  const valueArr = [1, 2, 3];
  export const ControlTheValueOfTheRating = () => valueArr.map((value, index) => (
    <div>
     The Value Of The Rating: {value}
      <Rating ratingValue={value}/>
    </div>
  ));