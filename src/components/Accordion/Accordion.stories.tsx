// created storybook to test the accordion component
import React, { useState, useEffect } from 'react';
import Accordion from '../Accordion';
import { Icon } from '../../index';
import './_Accordion.scss';

export default {
  title: 'Accordion',
  component: Accordion,
};

export const DefaultAccordion = () => (
  <div>
    <p>A basic Accordion component.</p>
    <Accordion
      title={'Expansion Panel 1'}
      content="This accordion is expanded by default"
      expandIcon={<Icon name="angle down" size="mini" color="black" />}
      collapseIcon={<Icon name="angle down" size="mini" color="black" />}
      onChange={(expanded) => console.log(expanded)}
      controlledNum = {3}
    />
  </div>
);

export const DisabledAccordion = () => (
  <div>
    <p>Disabled accordion</p>
    <Accordion
      className="accordion"
      title="Accordion title"
      expandIcon={<Icon name="angle down" size="mini" color="black" />}
      controlledNum={1}
      disabled={true}
    />
  </div>
);

export const ControlledAccordion = () => {
  return (
    <div>
      <Accordion
        expandIcon={<Icon name="angle down" size="mini" color="black" />}
        collapseIcon={<Icon name="angle down" size="mini" color="black" />}
        multiple
        // accordionArr={[
        //   { title: 'hello1', content: 'hello1' },
        //   { title: 'hello2', content: 'hello2' },
        //   { title: 'hello3', content: 'hello3' },
        // ]}
      />
    </div>
  );
};
