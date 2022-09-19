import React from 'react';
import { action } from '@storybook/addon-actions';
import Accordion from './Accordion';
import AccordionDetail from './AccordionDetail';
import AccordionHeader from './AccordionHeader';

export default {
  title: 'Accordion',
  component: Accordion,
};

export const DefaultAccordion = () => {
  return  <Accordion onClick={action('hello clicked')}>
            <AccordionHeader >
              <p>hello</p>
            </AccordionHeader>
            <AccordionDetail>
              <p>New Accoirdon detail helloooo</p>
            </AccordionDetail>
          </Accordion>
}

export const MultipleAccordions = () => {
  return  <><Accordion>
            <AccordionHeader>
              <p>hello</p>
            </AccordionHeader>
            <AccordionDetail>
              <p>New Accoirdon detail helloooo</p>
            </AccordionDetail>
          </Accordion>
          <Accordion>
          <AccordionHeader>
            <p>hello</p>
          </AccordionHeader>
          <AccordionDetail>
            <p>New Accoirdon detail helloooo</p>
          </AccordionDetail>
        </Accordion>
        <Accordion>
        <AccordionHeader>
          <p>hello</p>
        </AccordionHeader>
        <AccordionDetail>
          <p>New Accoirdon detail helloooo</p>
        </AccordionDetail>
      </Accordion>
      </>
}


export const DisabledAccordion = () => {
  return  <><Accordion>
            <AccordionHeader>
              <p>hello</p>
            </AccordionHeader>
            <AccordionDetail>
              <p>New Accoirdon detail helloooo</p>
            </AccordionDetail>
          </Accordion>
          <Accordion>
          <AccordionHeader>
            <p>hello</p>
          </AccordionHeader>
          <AccordionDetail>
            <p>New Accoirdon detail helloooo</p>
          </AccordionDetail>
        </Accordion>
        <Accordion disabled>
        <AccordionHeader>
          <p>hello</p>
        </AccordionHeader>
        <AccordionDetail>
          <p>New Accoirdon detail helloooo</p>
        </AccordionDetail>
      </Accordion>
      </>
}

export const ControlledAccordion:React.FC = () => {
  const [expanded, setExpanded] = React.useState<string | false >(false);

  const handleChange = (panel : string) => {
    return (open?: boolean) => setExpanded(open ? panel : false)
  }





  //   return (event: React.SyntheticEvent) => {
  //     console.log('sadfsdf',panel,open)
  //     //setExpanded(expanded ? panel : false);
  //   ;
  // }


    //ChangeEvent<HTMLInputElement>
    //MouseEventHandler<HTMLInputElement>

  return  <><Accordion expanded={expanded === 'panel1'} onClick={handleChange('panel1')}>
            <AccordionHeader>
              <p>hello</p>
            </AccordionHeader>
            <AccordionDetail>
              <p>New Accoirdon detail helloooo</p>
            </AccordionDetail>
          </Accordion>
          <Accordion expanded={expanded === 'panel2'} onClick={handleChange('panel2')}>
          <AccordionHeader>
            <p>hello</p>
          </AccordionHeader>
          <AccordionDetail>
            <p>New Accoirdon detail helloooo</p>
          </AccordionDetail>
        </Accordion>
        <Accordion expanded={expanded === 'panel3'} onClick={handleChange('panel3')}>
        <AccordionHeader>
          <p>hello</p>
        </AccordionHeader>
        <AccordionDetail>
          <p>New Accoirdon detail helloooo</p>
        </AccordionDetail>
      </Accordion>
      </>
}
