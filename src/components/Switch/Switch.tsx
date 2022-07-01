  //SECTION 1:
import React, { FC, ReactNode,useEffect,useState } from 'react';
import { classNames } from '../../utils/classNames';

//SECTION 2: 
// DEWFINE OPTIONS AVAILABLE TO YOUR END USER

export type SwitchSize = 'lg' | 'sm';
export type SwitchColor =
  | 'primary'
  | 'secondary'
  | 'danger'
  | 'default'

//SECTION 3:
// INTERFACE 

export interface ISwitchProps {
    /** set customized style */
    className?: string;
    /** set switch size */
    switchSize?: SwitchSize;
    /** set switch type */
    switchColor?: SwitchColor;
    /** set disabled switch */
    disabled?: boolean;
  }

//SECTION 4: 
// MAke sure your props are exported

export type patSwitchProps = ISwitchProps

// import Example from '../Component/Example'
// <Example
// className=
// exampleOPtion="Option1"
// /> 

//SECTION 5: DEFINE HTML/ LOGIC/ PROPS/ VARIABLE DECLARATIONS

export const Switch: FC<patSwitchProps> = (props) => {

    //SECTION 5.1: Make sure the components are carried over into your component
    // 
    const { className, switchSize, switchColor, disabled, children, ...rest} = props;

    function ChangeColor() {
        console.log('We have clicked change color')
    }

    //SECTION 5.2 - YOUR ACTUAL HTML ELEMENTS
    let Switch =
        <>
            <label className="switch">  
                <input type="checkbox" onClick={ChangeColor}/>
                <span 
                    className="slider round"
                    color="danger">
                </span>
            </label>
            <div className="label-right">{props.children}</div>
        </>
    return Switch;
}

// 
Switch.defaultProps = { 
    switchColor: 'default',
    disabled: false
};

export default Switch;