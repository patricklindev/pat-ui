// created storybook to test the accordion component
import React, { useState } from 'react';
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
      title="Accordion Panel 1"
      content="This accordion is expanded by default"
      expandIcon={<Icon name="angle down" size="mini" color="black" />}
      collapseIcon={<Icon name="angle down" size="mini" color="black" />}
      onChange={(expanded) => console.log(expanded)}
    />
    <Accordion
      title="Accordion Panel 2"
      content="This accordion is expanded by default"
      expandIcon={<Icon name="angle down" size="mini" color="black" />}
      collapseIcon={<Icon name="angle down" size="mini" color="black" />}
      expanded={true}
    />
    <Accordion
      title="Accordion Panel 3
      "
      content="This is a test accordion content. Test test and test only. thanksThis is a test accordion content. Test test and test only. thanksThis is a test accordion content. Test test and test only. thanksThis is a test accordion content. Test test and test only. thanksThis is a test accordion content. Test test and test only. thanksThis is a test accordion content. Test test and test only. thanksThis is a test accordion content. Test test and test only. thanksThis is a test accordion content. Test test and test only. thanksvThis is a test accordion content. Test test and test only. thanksThis is a test accordion content. Test test and test only. thanks"
      expandIcon={<Icon name="angle down" size="mini" color="black" />}
      collapseIcon={<Icon name="angle down" size="mini" color="black" />}
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
      disabled={true}
    />
  </div>
);

export const ControlledAccordion = () => {
  // use context here.

  const [expandOne, setExpandOne] = useState('');

  const toggleOne = (panel: string) => {
    setExpandOne(panel);
  };

  return (
    <div>
      <p>A basic Accordion component.</p>
      <Accordion
        title="Controlled Accordion 1"
        content="This is a test accordion content. Test test and test only. thanks"
        expandIcon={<Icon name="angle down" size="mini" color="black" />}
        collapseIcon={<Icon name="angle down" size="mini" color="black" />}
      />
      <Accordion
        title="Controlled Accordion 2"
        content="This accordion is expanded by default"
        expandIcon={<Icon name="angle down" size="mini" color="black" />}
        collapseIcon={<Icon name="angle down" size="mini" color="black" />}
      />
      <Accordion
        title="Controlled Accordion 3"
        content="This is a test accordion content. Test test and test only. thanks"
        expandIcon={<Icon name="angle down" size="mini" color="black" />}
        collapseIcon={<Icon name="angle down" size="mini" color="black" />}
      />
    </div>
  );
};
