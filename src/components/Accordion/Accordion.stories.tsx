import React, { useState, FC } from 'react';
import Accordion from './Accordion';
import './_Accordion.scss'

export default {
  title: 'Accordion',
  component: Accordion,
};

const accordionStyle: React.CSSProperties = {
  marginRight: '5px',
  marginTop: '5px',
};

  export const DefaultAccordion = (props) => {
    return (
      <React.Fragment>
        <Accordion/>
      </React.Fragment>
    );
  };

export const DisabledAccordion = (props) => {
  return (
    <Accordion
      disabled
    />
    )
  };
