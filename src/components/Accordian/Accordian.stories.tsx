//////

import React from 'react';
import { action } from '@storybook/addon-actions';
import Accordion from './Accordian';

export default {
  title: 'Accordion',
  component: Accordion,
};

export const BasicAccordion = () => (
    <div>
        <Accordion title="Accordion 1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </Accordion>

        <Accordion title="Accordion 2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </Accordion>

        <Accordion title="Disabled Accordion" disabled>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </Accordion>
        
    </div>


);

export const ControlledAccordion = () => {
    const [expanded, setExpanded] = React.useState<string | false>(false);
  
    const handleToggle =
      (panelId: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
        setExpanded(isExpanded ? panelId : false);
      };
  
    return (
      <div>
        <Accordion 
          panelId='panel1' 
          isOpen={expanded === 'panel1'} 
          onPanelChange={handleToggle} 
          title="General settings"
          subTitle="I am an accordion"
        >
          Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget maximus est, id dignissim quam.
        </Accordion>
        <Accordion 
          panelId='panel2' 
          isOpen={expanded === 'panel2'} 
          onPanelChange={handleToggle} 
          title="Users"
          subTitle="You are currently not an owner"
        >
          Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus, varius pulvinar diam eros in elit. Pellentesque convallis laoreet laoreet.
        </Accordion>
        <Accordion 
          panelId='panel3' 
          isOpen={expanded === 'panel3'} 
          onPanelChange={handleToggle} 
          title="Advanced settings"
          subTitle="Filtering has been entirely disabled for whole web server"
        >
          Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit amet egestas eros, vitae egestas augue. Duis vel est augue.
        </Accordion>

        <Accordion 
          panelId='panel4' 
          isOpen={expanded === 'panel4'} 
          onPanelChange={handleToggle} 
          title="Personal data"
        >
          Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit amet egestas eros, vitae egestas augue. Duis vel est augue.
        </Accordion>


      </div>
    );
  };
  


export const CustomizedAccordion = () => {
    const [expanded, setExpanded] = React.useState<string | false>(false);
  
    const handleToggle =
      (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
        setExpanded(isExpanded ? panel : false);
      };

      return (
    <div>
  <Accordion title="Collapsible Group Item #1"
            panelId ='1'
            isOpen={expanded === '1'} 
            onPanelChange={handleToggle} >
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
    malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
    sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
    sit amet blandit leo lobortis eget.
  </Accordion>

  <Accordion title="Collapsible Group Item #2"
            panelId = '2'
            isOpen={expanded === '2'} 
            onPanelChange={handleToggle}>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
    malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
    sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
    sit amet blandit leo lobortis eget.
  </Accordion>

  <Accordion title="Collapsible Group Item #3"
                panelId = '3'
                isOpen={expanded === '3'} 
                onPanelChange={handleToggle}>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
    malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
    sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
    sit amet blandit leo lobortis eget.
  </Accordion>

    </div>

      )};
