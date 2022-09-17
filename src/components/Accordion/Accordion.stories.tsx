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
  return  <Accordion>
            <AccordionHeader>
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

