import React, {
    AllHTMLAttributes,
    AriaAttributes,
    FC,
    MouseEvent,
    EventHandler,
    ChangeEvent,
    useState,
} from 'react';
import { classNames } from '../../utils/classNames';


//SECTION 2: 
//DEFINE OPTIONS AVAILABLE TO YOUR END USER

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
export type Toggle = 'on' | 'off'

//SECTION 3:

export interface ISwitchProps {
    /** set customized style */
    className?: string;
     /** set switch label */
    label?: string;
    /** set switch color */
    color?: SwitchColor;
    /** set switch size */
    sizes?: SwitchSize;
    /** set switch on or off*/
    toggle?: Toggle;
    /** set switch disabled*/
    disabled?: boolean;
    /** set switch onChecked*/
    onChecked?: MouseEventHandler;
    /** set switch onChange*/
    onChange?: ChangeEventHandler;
    /** set switch  */
    onClick?: MouseEventHandler;
}

//SECTION 4: 
// MAke sure your props are exported
// type NativeSwtichProps = ISwitchProps & HTMLAttributes<HTMLElement>;
// type NativeAchorSwitchProps = ISwitchProps & AnchorHTMLAttributes<HTMLAnchorElement>;
export type SwitchProps = ISwitchProps & AllHTMLAttributes<HTMLElement>

/**
 * A Switch indicates a possible user action.
 *
 * ```js
 * import {Switch} from 'pat-ui'
 * ```
 */

//SECTION 5: DEFINE HTML/ LOGIC/ PROPS/ VARIABLE DECLARATIONS

export const Switch: FC<SwitchProps> = (props) => {
    const { className, color, size, disabled, toggle, onChecked, onChange, onClick, label, children, ...rest} = props;
    let styleClasses = classNames('slider round', {
        [`${color}`]: !!color,
        [`${size}`]: !!size,
        disabled: !!disabled
    })

    let strSwitch: string = 'switch'

    const [isChecked, setIsChecked] = useState(toggle === 'on' ? true : false)

    const onInputChange = () => {
        setIsChecked(!isChecked);
      };

    if (className) {
        styleClasses += ' ' + className;
    }
    
    let Switch = (
        <label className={strSwitch}>  
            <input 
                type="checkbox"
                checked={isChecked}
                disabled={disabled}
                size={size}
                onChange={onInputChange}
                onClick={onChecked}
                {...(rest )}
            />
            <span color={color} className={styleClasses}/>
            <span id="switch-label">{label}</span>
        </label>
    )
    return Switch;
}

Switch.defaultProps = { 
    color: 'primary',
    disabled: false
};

export default Switch;