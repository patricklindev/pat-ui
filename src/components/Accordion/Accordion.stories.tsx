import React from 'react';
import Accordion from './Accordion';
// SECTION 1 Import your component and REACT libary

//SECTION 2: Define default render
export default {
  title: 'Accordion',
  component: Accordion,
};

//SECTION 3: Define what is shown on Storybook

export const DefaultAccordion = () => (
  <div>
    <Accordion></Accordion>
  </div>
);
