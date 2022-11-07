// Accordion.stories.ts|tsx
import React from 'react';
import Accordion from './Accordion';

export default {
  title: 'Accordion',
  component: Accordion,
};

export const DefaultAccordion = () => (
  <div>
    <Accordion />
  </div>
);

export const ControlledAccordion = () => (
  <div>
    <Accordion expansionType="controlled" />
  </div>
);
