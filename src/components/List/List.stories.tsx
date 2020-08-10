import React from 'react';
import { action } from '@storybook/addon-actions';
//import Button, {ButtonType, ButtonSize} from './Button';
import List from './List'
import ListItem from './ListItem';
export default {
    title: 'List',
    component: List,
};

// const buttonStyle: React.CSSProperties = {
//   marginRight: '5px',
//   marginTop: '5px',
// };

export const DefaultList = () => (
    <List></List>
    //<Button onClick={action('Default Button clicked')}>Default Button</Button>
);

export const ListWithShortHandItem = () => (
    <div>
        <List items={['a', 'b', 'c']}></List>

    </div>
);

export const ListWithListItem = () => (
    <div>
        <List>
            <ListItem> a </ListItem>
            <ListItem> b </ListItem>
            <ListItem> c </ListItem>
        </List>
    </div>
);

export const ListWithHref = () => (
    <div>
        <List link={true} items={['a', 'b', 'c']}></List>

        <List link={true}>
            <ListItem> a </ListItem>
            <ListItem> b </ListItem>
            <ListItem> c </ListItem>
            {/* <ListItem link={true}> a </ListItem>
          <ListItem link={true}> b </ListItem>
          <ListItem link={true}> c </ListItem> */}
        </List>


    </div>
);

export const ListWithHorizontal = () => (
    <div>
        <List horizontal={true} items={['a', 'b', 'c']}></List>
        <List horizontal={true}>
            <ListItem > a </ListItem>
            <ListItem > b </ListItem>
            <ListItem > c </ListItem>
        </List>


    </div>
);


export const ListWithActiveFlag = () => (
    <div>
        <List>
            <ListItem active={false}> this is a disabled item </ListItem>
            <ListItem > b </ListItem>
            <ListItem > c </ListItem>
        </List>


    </div>
);