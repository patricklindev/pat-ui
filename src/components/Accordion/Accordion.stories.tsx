// created storybook to test the accordion component
import React, {useState, useEffect} from 'react';
import Accordion from '../Accordion';
import { Icon } from '../../index';
import './_Accordion.scss'



export default {
    title: 'Accordion',
    component: Accordion,
}

export const DefaultAccordion = () => (
    <div>
        <p>A basic Accordion component.</p>
    <Accordion
      title={"Expansion Panel 1"}
      content="This accordion is expanded by default"
      expandIcon={<Icon name='angle down' size='mini' color='black' />}
      collapseIcon={<Icon name='angle down' size='mini' color='black' />}
      onChange={(expanded) => console.log(expanded)}  
    />
    <Accordion
      title="Accordion 2"
      content="This accordion is expanded by default"
      expandIcon={<Icon name='angle down' size='mini' color='black' />}
      collapseIcon={<Icon name='angle down' size='mini' color='black' />}
      expanded={true}
    />
    <Accordion
      title="Accordion 3"
      content="This is a test accordion content. Test test and test only. thanks This is a test accordion content. Test test and test only. thanks This is a test accordion content. Test test and test only. thanks This is a test accordion content. Test test and test only. thanks This is a test accordion content. Test test and test only. thanks This is a test accordion content. Test test and test only. thanks This is a test accordion content. Test test and test only. thanks This is a test accordion content. Test test and test only. thanks This is a test accordion content. Test test and test only. thanks This is a test accordion content. Test test and test only. thanks This is a test accordion content. Test test and test only. thanks This is a test accordion content. Test test and test only. thanks This is a test accordion content. Test test and test only. thanks This is a test accordion content. Test test and test only. thanks This is a test accordion content. Test test and test only. thanks This is a test accordion content. Test test and test only. thanks"
      expandIcon={<Icon name='angle down' size='mini' color='black' />}
      collapseIcon={<Icon name='angle down' size='mini' color='black' />}
    />
    </div>
);

export const DisabledAccordion = () => (
    <div>
        <p>Disabled accordion</p>
        <Accordion
            className="accordion"
            title="Accordion title"
            expandIcon={<Icon name='angle down' size='mini' color='black' />}
            disabled={true}
        />
    </div>
);

export const ControlledAccordion = () => {

    const [expanded, setExpanded] = useState(false);
    // const handleChange =
    // (panel: string) => (e: React.SyntheticEvent, isExpanded: boolean) => {
    //     setExpanded(isExpanded ? panel : false);
    //   };

      
    return (
    <div>
        <p>A basic Accordion component.</p>
        <Accordion
            onChange={() => setExpanded(!expanded)}           
            controlledExpanded={expanded} 
            title="Controlled Accordion 1"
            content="This is a test accordion content. Test test and test only. thanks"
            expandIcon={<Icon name='angle down' size='mini' color='black' />}
            collapseIcon={<Icon name='angle down' size='mini' color='black' />}
        />
        <Accordion
            onChange={() => setExpanded(!expanded)}           
            controlledExpanded={expanded} 
            title="Controlled Accordion 2"
            content="This accordion is controlledExpand by default"
            expandIcon={<Icon name='angle down' size='mini' color='black' />}
            collapseIcon={<Icon name='angle down' size='mini' color='black' />}
        />
        <Accordion
            onChange={() => setExpanded(!expanded)}           
            controlledExpanded={expanded} 
            title="Controlled Accordion 3"
            content="This is a test accordion content. Test test and test only. thanks"
            expandIcon={<Icon name='angle down' size='mini' color='black' />}
            collapseIcon={<Icon name='angle down' size='mini' color='black' />}    
        />
        </div>
    )
};
    