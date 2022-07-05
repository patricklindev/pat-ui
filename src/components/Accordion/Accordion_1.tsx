//SECTION 1:
import React, { FC, ReactNode, useEffect, useState } from 'react';
import { classNames } from '../../utils/classNames';

//SECTION 2:
// DEWFINE OPTIONS AVAILABLE TO YOUR END USER

export type AccordionOption = 'Option1' | 'Option2' | 'Option3';

//SECTION 3:
// INTERFACE

export interface IAccordionProps {
  className?: string;
  adOptions?: AccordionOption;
}

//SECTION 4:
// MAke sure your props are exported

// export type patExampleProps = IExampleProps;

// import Example from '../Component/Example'
// <Example
// className=
// exampleOPtion="Option1"
// />

//SECTION 5: DEFINE HTML/ LOGIC/ PROPS/ VARIABLE DECLARATIONS

export const Accordion: FC<IAccordionProps> = (props) => {
  //SECTION 5.1: Make sure the components are carried over into your component
  //
  const { className, adOptions } = props;

  function ChangeColor() {
    console.log('We have clicked change color');
  }

  //SECTION 5.2 - YOUR ACTUAL HTML ELEMENTS
  let Accordion = (
    <div className="Example-Container">
      <h1> This is the example </h1>
      <h1> {adOptions} </h1>
      <button onClick={ChangeColor}> </button>
    </div>
  );
  return Accordion;
};

//
Accordion.defaultProps = {
  adOptions: 'Option2',
};

export default Accordion;
