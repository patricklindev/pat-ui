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

export const StyledAccordion = () => (
  <div>
    <Accordion
      optionalStyles={{
        fontWeight: 'bold',
        backgroundColor: 'lightgreen',
        borderRadius: '0.5rem',
      }}
      expandIcon="https://images.emojiterra.com/google/android-11/512px/263a.png"
    />
  </div>
);
