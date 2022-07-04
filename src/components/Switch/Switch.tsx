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
  | 'sucess'
  | 'info'
  | 'warning'
  | 'danger'
  | 'light'
  | 'dark'
export type SwitchType = 'checkbox'
export type SwitchChecked = false

//SECTION 3:
// INTERFACE 

export interface ISwitchProps {
    /** set customized style */
    className?: string;
     /** set switch color */
    color?: SwitchColor;
    /** set switch size */
    size?: SwitchSize;
    /** set disabled switch */
    disabled?: boolean;
    /**set switch color*/
    type?: SwitchType
    
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

/**
 * A Switch indicates a possible user action.
 *
 * ```js
 * import {Switch} from 'pat-ui'
 * ```
 */

//SECTION 5: DEFINE HTML/ LOGIC/ PROPS/ VARIABLE DECLARATIONS

export const Switch: FC<SwitchProps> = (props) => {

    //SECTION 5.1: Make sure the components are carried over into your component
    // 
    const { className, type, color, size, disabled, children, ...rest} = props;
    let styleClasses = classNames('slider round',{
        [`${color}`]: !!color,
        [`${size}`]: !!size,
        disabled: !!disabled
    })
    if (className) {
        styleClasses += ' ' + className;
    }


    //SECTION 5.2 - YOUR ACTUAL HTML ELEMENTS
    
    // if/else statement
    let Switch;
    if (disabled) {
        Switch = (
            <>
                <label className="switch">  
                    <input 
                        type="checkbox"
                        disabled={true}
                        {...(rest)}
                    />
                    <span className={styleClasses}/>
                    <div>
                        {props.children}
                    </div>
                </label>
            </>
        )
    } else {
        Switch = (
            <>
                <label className="switch">  
                    <input 
                        type="checkbox"
                        {...(rest )}
                    />
                 <span color={color} className={styleClasses}/>
                    <div>
                        {props.children}
                    </div>
                </label>
            </>
        )
    }
    
    return Switch;
}

// 
Switch.defaultProps = { 
    // color: 'default',
    // disabled: false,
};

export default Switch;