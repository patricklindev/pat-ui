import React from 'react';
import {useState} from 'react';
import { action } from '@storybook/addon-actions';
import Accordion from './Accordion';
import Items from './ItemsComponent/Items';


export default {
  title: 'Accordion',
  component: Accordion,
};

const buttonStyle: React.CSSProperties = {
  marginRight: '5px',
  marginTop: '5px',
};

export const DefaultAccordion = () => (
  <Items/>
);

// export const DiffSizeAccordion = () => (
//   <div>
//     Test
//   </div>
// );

// export const DiffTypeAccordion = () => (
//   <div>
//     Hello
//   </div>
// );