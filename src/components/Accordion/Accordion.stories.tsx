import React from 'react';
import { action } from '@storybook/addon-actions';
import AccordionOption from './AccordionOption';
import Accordion from './Accoridion';

export default {
  title: 'Accordion',
  component: Accordion,
};

const accordionStyle: React.CSSProperties = {
  marginRight: '5px',
  marginTop: '5px',
};

export const DefaultAccordion = () => (
    <Accordion>
        <AccordionOption
        summary="default summary" 
        detail="You can place a string, React component or a JSX Element"
        onChange={action("expanded component")} />
        <AccordionOption
        summary="default summary" 
        detail="You can place a string, React component or a JSX Element"
        onChange={action("expanded component")} />
    </Accordion>
);
