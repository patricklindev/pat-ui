//SECTION 1:
import React, { FC, ReactNode,useEffect,useState } from 'react';
import { classNames } from '../../utils/classNames';

//SECTION 2: 
// DEWFINE OPTIONS AVAILABLE TO YOUR END USER

export type ExampleOption = "Option1" | "Option2" |"Option3"

//SECTION 3:
// INTERFACE 

export interface IExampleProps {
    className?: string;
    exampleOptions?: ExampleOption;
}

//SECTION 4: 
// MAke sure your props are exported

export type patExampleProps = IExampleProps

// import Example from '../Component/Example'
// <Example
// className=
// exampleOPtion="Option1"
// /> 

//SECTION 5: DEFINE HTML/ LOGIC/ PROPS/ VARIABLE DECLARATIONS

export const Example: FC<patExampleProps> = (props) => {

    //SECTION 5.1: Make sure the components are carried over into your component
    // 
    const {
        className,
        exampleOptions,
    } = props;

    
}