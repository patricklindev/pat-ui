  //SECTION 1:
  import React, {
    FC,
    MouseEvent,
    EventHandler,
    ChangeEvent,
  } from 'react';
import { classNames } from '../../utils/classNames';

//SECTION 2: 
// DEFINE OPTIONS AVAILABLE TO YOUR END USER

export type SwitchSize = 'sm';
export type SwitchColor = 
| 'primary' 
| 'secondary' 
| 'success'
| 'info'
| 'warning'
| 'danger'
| 'light'
| 'dark'
export type MouseEventHandler<T = Element> = EventHandler<MouseEvent<T>>;
export type ChangeEventHandler<T = Element> = EventHandler<ChangeEvent<T>>;

//SECTION 3:
// INTERFACE 

export interface ISwitchProps {
    /** set customized style */
    className?: string;
    /** set switch color */
    color?: SwitchColor;
    /** set switch size */
    size?: SwitchSize;
    /** set switch checked*/
    defaultChecked?: boolean;
    /** set switch disabled*/
    disabled?: boolean;
    /** set switch onChange*/
    onChange?: ChangeEventHandler;
    /** set switch click action */
    onClick?: MouseEventHandler;
  }

//SECTION 4: 
// MAke sure your props are exported

// type NativeSwtichProps = ISwitchProps & HTMLAttributes<HTMLButtonElement>;
// type NativeAchorSwitchProps = ISwitchProps & AnchorHTMLAttributes<HTMLAnchorElement>;
// export type SwitchProps = ISwitchProps & HTMLAttributes<HTMLElement>

/**
 * A Switch indicates a possible user action.
 *
 * ```js
 * import {Switch} from 'pat-ui'
 * ```
 */

//SECTION 5: DEFINE HTML/ LOGIC/ PROPS/ VARIABLE DECLARATIONS

export const Switch: FC<ISwitchProps> = (props) => {
    let strCheckbox: string = 'checkbox';
    let strSwitch: string = 'switch'

    //SECTION 5.1: Make sure the components are carried over into your component
    // 
    const { className, color, size, disabled, onChange, children, ...rest} = props;
    let styleClasses = classNames('slider round', {
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
        // disabled ? 
        Switch = (
            <>
                <label className={strSwitch}>  
                    <input 
                        type={strCheckbox}
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
    } else if(onChange) { 
        Switch = (
            <>
                <label className={strSwitch}>  
                    <input
                        type={strCheckbox}
                        onChange={onChange}
                        {...(rest )}
                    />
                 <span color={color} className={styleClasses}/>
                    <div>
                        {props.children}
                    </div>
                </label>
            </>
        )
    } else {
        Switch = (
            <>
                <label className={strSwitch}>  
                    <input 
                        type={strCheckbox}
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