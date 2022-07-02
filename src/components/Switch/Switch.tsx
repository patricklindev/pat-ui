  //SECTION 1:
  import React, {
    HTMLAttributes,
    AnchorHTMLAttributes,
    FC,
    MouseEvent,
  } from 'react';
import { classNames } from '../../utils/classNames';

//SECTION 2: 
// DEFINE OPTIONS AVAILABLE TO YOUR END USER

export type SwitchSize = 'lg' | 'sm';
export type SwitchColor =
  | 'primary'
  | 'secondary'
  | 'danger'
  | 'default'
export type Disabled = false

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
    disabled?: Disabled;
    /**set action click*/
  }

//SECTION 4: 
// MAke sure your props are exported

// type NativeSwtichProps = ISwitchProps & HTMLAttributes<HTMLButtonElement>;
// type NativeAchorSwitchProps = ISwitchProps & AnchorHTMLAttributes<HTMLAnchorElement>;
export type SwitchProps = ISwitchProps & HTMLAttributes<HTMLElement>

// import Example from '../Component/Example'
// <Example
// className=
// exampleOPtion="Option1"
// /> 

//SECTION 5: DEFINE HTML/ LOGIC/ PROPS/ VARIABLE DECLARATIONS

export const Switch: FC<SwitchProps> = (props) => {

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
                <input 
                    type="checkbox" 
                    defaultChecked
                    {...(rest )}
                />
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