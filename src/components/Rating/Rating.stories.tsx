import React,{ useState } from 'react';
import Rating from './Rating';
import Icon from '../Icon/Icon';
import {action} from '@storybook/addon-actions';

export default {
    title: 'Rating',
    component: Rating,
}

export const DefaultRating = () => {
    const [value, setValue] = useState(2);

    const handleValueChange = (newValue: number) => {
      setValue(newValue);
    };

    return (
        <div>
            <h3>Basic rating</h3>
            <h6>Controlled</h6>
            <Rating
                totalStars={5}
                precision={1}
                value={value}
                onChange={handleValueChange}
            />
            <hr/>
            <h6>Read Only</h6>
            <Rating
                totalStars={5}
                precision={1}
                value={value}
                onChange={handleValueChange}
                readOnly
            />
            <hr/>
            <h6>Disabled</h6>
            <Rating
                totalStars={5}
                precision={1}
                value={value}
                onChange={handleValueChange}
                disabled
            />
            <hr/> 
            <h6>No rating given</h6>
            <Rating
                totalStars={5}
                precision={1}
                value={0}
                onChange={handleValueChange}
            />
        </div>
)};

export const PrecisionRating = () => {
    const [value, setValue] = useState(0);

    const handleValueChange = (newValue: number) => {
      setValue(newValue);
    };

    return (
        <div>
            <h3>Rating precision</h3>
            <p>The rating can display any float number with the value prop. Use the precision prop to define the minimum increment value change allowed.</p>
            <Rating
                totalStars={5}
                precision={0.5}
                value={value}
                onChange={handleValueChange}
                size='massive'
                defaultValue={2}
            />
            <p>Rating value: {value} </p>
        </div>
)};

export const HoverFeedback = () => {
    const [value, setValue] = useState(0);
    const [hover, setHover] = React.useState(-1);

    const labels: { [index: string]: string } = {
        0.5: 'Useless',
        1: 'Useless+',
        1.5: 'Poor',
        2: 'Poor+',
        2.5: 'Ok',
        3: 'Ok+',
        3.5: 'Good',
        4: 'Good+',
        4.5: 'Excellent',
        5: 'Excellent+',
    };
    
    function getLabelText(value: number) {
        return `${value} Star${value !== 1 ? 's' : ''}, ${labels[value]}`;
    }

    const handleValueChange = (newValue: number) => {
      setValue(newValue);
    };

    return (
        <div>
            <h3>Hover feedback</h3>
            <p>You can display a label on hover to help the user pick the correct rating value. The demo uses the onChangeActive prop.</p>
            <Rating
                totalStars={5}
                precision={0.5}
                value={value}
                onChange={handleValueChange}
                size='massive'
                defaultValue={2}
                getLabelText={getLabelText}
                onChangeActive={(newHover:number) => {
                    setHover(newHover);
                }}
            />
           {value !== null && (
                <p>{labels[hover !== -1 ? hover : value]}</p>
            )}
        </div>
)};

export const SizeRating = () => {
    const [value, setValue] = useState(0);

    const handleValueChange = (newValue: number) => {
      setValue(newValue);
    };

    return (
        <div>
            <h3>Sizes</h3>
            <p>For larger or smaller ratings use the size prop.</p>
            <Rating
                totalStars={5}
                precision={0.5}
                value={value}
                onChange={handleValueChange}
                size='mini'
                defaultValue={2}
            />
            <br/>
            <Rating
                totalStars={5}
                precision={0.5}
                value={value}
                onChange={handleValueChange}
                size='small'
                defaultValue={2}
            />
            <br/>
            <Rating
                totalStars={5}
                precision={0.5}
                value={value}
                onChange={handleValueChange}
                size='large'
                defaultValue={2}
            />
            <br/>
            <Rating
                totalStars={5}
                precision={0.5}
                value={value}
                onChange={handleValueChange}
                size='big'
                defaultValue={2}
            />
            <br/>
            <Rating
                totalStars={5}
                precision={0.5}
                value={value}
                onChange={handleValueChange}
                size='massive'
                defaultValue={2}
            />
        </div>
)};

export const CustomizationRating = () => {
    const [value, setValue] = useState(0);

    const handleValueChange = (newValue: number) => {
      setValue(newValue);
    };

    return (
        <div>
            <h3>Custom icon </h3>
            <p>For larger or smaller ratings use the size prop.</p>
            <h6>Custom icon</h6>
            <Rating
                totalStars={5}
                value={value}
                onChange={handleValueChange}
                filledIcon={<Icon
                    name="heart"
                    color="red"
                  />}
                
                emptyIcon={<Icon
                    name="empty heart"
                    color="pink"
                />}
            />
            <hr/>
            <h6>10 stars</h6>
            <Rating
                totalStars={10}
                value={value}
                onChange={handleValueChange}
                size={'massive'}

            />
        </div>
)};


