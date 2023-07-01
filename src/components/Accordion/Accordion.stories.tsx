import React from 'react';
import { action } from '@storybook/addon-actions';
import Accordion from './Accordion';

export default {
  title: 'Accordion',
  component: Accordion,
};

export const DefaultAccordion = () => {
  return (
    <div>
      <h3>Simple Expansion Panel</h3>
      <Accordion expanded>
        More RVs were seen in the storage lot than at the campground..
      </Accordion>
      <Accordion>
        More RVs were seen in the storage lot than at the campground..
      </Accordion>
      <Accordion disabled>
        Behind the window was a reflection that only instilled fear.
      </Accordion>
    </div>
  );
};

export const ControlledAccordion = () => {
  const [expanded, setExpanded] = React.useState<string>('');

  const handleChange = (panel: string) => {
    expanded !== panel ? setExpanded(panel) : setExpanded('');
    console.log(expanded);
  };
  return (
    <div>
      <h3>Controlled Accordion</h3>
      <Accordion
        expanded={expanded === 'panel1'}
        onChange={() => handleChange('panel1')}
      >
        More RVs were seen in the storage lot than at the campground..
      </Accordion>
      <Accordion
        expanded={expanded === 'panel2'}
        onChange={() => handleChange('panel2')}
      >
        More RVs were seen in the storage lot than at the campground..
      </Accordion>
      <Accordion
        expanded={expanded === 'panel3'}
        onChange={() => handleChange('panel3')}
      >
        Behind the window was a reflection that only instilled fear.
      </Accordion>
    </div>
  );
};

export const AdditionalActions = () => {
  const [expanded, setExpanded] = React.useState<string>('');

  const handleChange = (panel: string) => {
    expanded !== panel ? setExpanded(panel) : setExpanded('');
    console.log(expanded);
  };
  return (
    <div>
      <h3>Additional Actions</h3>
      <Accordion
        expanded={expanded === 'panel1'}
        onChange={() => handleChange('panel1')}
      >
        More RVs were seen in the storage lot than at the campground..
      </Accordion>
      <Accordion
        expanded={expanded === 'panel2'}
        onChange={() => handleChange('panel2')}
      >
        More RVs were seen in the storage lot than at the campground..
      </Accordion>
      <Accordion
        expanded={expanded === 'panel3'}
        onChange={() => handleChange('panel3')}
      >
        Behind the window was a reflection that only instilled fear.
      </Accordion>
    </div>
  );
};
