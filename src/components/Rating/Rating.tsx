import React, { FC } from 'react';
import { classNames } from '../../utils/classNames';
/*
Users  should be able to preview the rating by hovering on the ‘stars’(proper animation should be applied)

Developers should be able to disable the component from props

Developers should be able to provide the label of the component from props

Developers should be able to set the precision of the rating component(Users can give a fraction of stars)

Developers can choose sizes of the rating component among various predefined options from props

Developers can decide the number of stars in total from props

Developers should be able to control the value of the rating from outside of the component by providing a prop.

Developers should be able to listen to the change of the value of the component from outside of the component by providing the onChange callback function as a prop.
*/
export interface IRatingProps {
  className?: string;
}
export type patRatingProp = IRatingProps;
export const Rating: FC<patRatingProp> = (props) => {
  return <div>This is a rating component</div>;
};
export default Rating;
