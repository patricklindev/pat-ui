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
    />
    <Accordion
      title="Accordion 2"
      content="This accordion is expanded by default"
      expandIcon={<Icon name="angle down" size="mini" color="black" />}
      collapseIcon={<Icon name="angle down" size="mini" color="black" />}
      defExpanded
    />
    <Accordion
      title="Accordion 3"
      content="This is a test accordion content. Test test and test only. thanks This is a test accordion content. Test test and test only. thanks This is a test accordion content. Test test and test only. thanks This is a test accordion content. Test test and test only. thanks This is a test accordion content. Test test and test only. thanks This is a test accordion content. Test test and test only. thanks This is a test accordion content. Test test and test only. thanks This is a test accordion content. Test test and test only. thanks This is a test accordion content. Test test and test only. thanks This is a test accordion content. Test test and test only. thanks This is a test accordion content. Test test and test only. thanks This is a test accordion content. Test test and test only. thanks This is a test accordion content. Test test and test only. thanks This is a test accordion content. Test test and test only. thanks This is a test accordion content. Test test and test only. thanks This is a test accordion content. Test test and test only. thanks"
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
