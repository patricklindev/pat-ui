// created storybook to test the accordion component
import React, {useState} from 'react';
import Accordion from '../Accordion';
import { Icon } from '../../index';


export default {
    title: 'Accordion',
    component: Accordion,
}

export const DefaultAccordion = () => (
    <div>
        <p>A basic Accordion component.</p>
    <Accordion
      title='User Profile'
      content='CONTENT'
      expandIcon={<Icon name='angle down' size='mini' color='black' />}
      collapseIcon={<Icon name='times' size='mini' color='black' />}
      onChange={(expanded) => console.log(expanded)}  
    />
    <Accordion
      title="Accordion 2"
      content="This accordion is expanded by default"
      expandIcon={<Icon name='angle down' size='mini' color='black' />}
      collapseIcon={<Icon name='times' size='mini' color='black' />}
      expanded={true}
    />
    <Accordion
      title="Accordion 3"
      content="This is a test accordion content. Test test and test only. thanks"
      expandIcon={<Icon name='angle down' size='mini' color='black' />}
      collapseIcon={<Icon name='times' size='mini' color='black' />}
    />
    </div>
);

export const DisabledAccordion = () => (
    <div>
        <p>Disabled accordion</p>
        <Accordion
            className="accordion"
            title="Accordion title"
            expandIcon={<Icon name='plus' size='mini' color='black' />}
            disabled={true}
        />
    </div>
);

// WIP: controlled accordion where clicking one will collapse other and expand the clicked one
    