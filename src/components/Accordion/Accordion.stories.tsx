import React from 'react';
import { action } from '@storybook/addon-actions';
import Accordion from './Accordion';
import  heart  from '../../asset/icon/heart-solid.svg';
export default {
  title: 'Accordion',
  component: Accordion,
};

export const DefaultAccordion = () => {
  return (
    <div>
      <h3>Simple Expansion Panel</h3>
      <Accordion expanded title='Expansion Panel 1'>
        More RVs were seen in the storage lot than at the campground..
        More RVs were seen in the storage lot than at the campground..
        More RVs were seen in the storage lot than at the campground..
      </Accordion>
      <Accordion title='Expansion Panel 2' >
        More RVs were seen in the storage lot than at the campground..
        More RVs were seen in the storage lot than at the campground..
      </Accordion>
      <Accordion disabled title='Disabled Expansion Panel' expandIcon={heart}  >
        Behind the window was a reflection that only instilled fear.
        More RVs were seen in the storage lot than at the campground..
        More RVs were seen in the storage lot than at the campground..
        More RVs were seen in the storage lot than at the campground..
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
        title='General settings'
        summary='I am an expansion panel'
      >
        More RVs were seen in the storage lot than at the campground..
      </Accordion>
      <Accordion
        expanded={expanded === 'panel2'}
        onChange={() => handleChange('panel2')}
        title='Users'
        summary='You are currently not an owner'
      >
        More RVs were seen in the storage lot than at the campground..
      </Accordion>
      <Accordion
        expanded={expanded === 'panel3'}
        onChange={() => handleChange('panel3')}
        title='Advanced settings'
        summary='Filtering has been entirely disabled for whole web server'
      >
        Behind the window was a reflection that only instilled fear.
      </Accordion>
      <Accordion
        expanded={expanded === 'panel4'}
        onChange={() => handleChange('panel4')}
        title='Personal data'
        
      >
        Behind the window was a reflection that only instilled fear.
      </Accordion>
    </div>
  );
};

export const AdditionalActions = () => {
  return (
    <div>
      <h3>Simple Expansion Panel</h3>
      <Accordion type='checkbox'>
        More RVs were seen in the storage lot than at the campground..
        More RVs were seen in the storage lot than at the campground..
        More RVs were seen in the storage lot than at the campground..
      </Accordion>
      <Accordion type='checkbox' >
        More RVs were seen in the storage lot than at the campground..
        More RVs were seen in the storage lot than at the campground..
      </Accordion>
      <Accordion type='checkbox'  >
        Behind the window was a reflection that only instilled fear.
        More RVs were seen in the storage lot than at the campground..
        More RVs were seen in the storage lot than at the campground..
        More RVs were seen in the storage lot than at the campground..
      </Accordion>
    </div>
  );
};
