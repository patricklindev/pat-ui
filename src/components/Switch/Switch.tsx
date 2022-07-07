import React, {
    AllHTMLAttributes,
    FC,
    MouseEvent,
    EventHandler,
    ChangeEvent,
    useState,
} from 'react';
import { classNames } from '../../utils/classNames';


//Types for props
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

//Props provided for users
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
    /** set switch action  */
    onAction?: MouseEventHandler;
    // /** set switch onChange*/
    // onChange?: ChangeEventHandler;
    /** set switch onClick */
    // onClick?: MouseEventHandler;

}

export type SwitchProps = ISwitchProps & AllHTMLAttributes<HTMLElement>

/**
 * A Switch indicates a possible user action.
 *
 * ```js
 * import {Switch} from 'pat-ui'
 * ```
 */

export const Switch: FC<SwitchProps> = (props) => {
    const { className, color, sizes, disabled, toggle, onChecked, onAction, label, ...rest} = props;
    const [isChecked, setIsChecked] = useState(toggle === 'on' ? true : false)
    console.log('internal:', isChecked)

    let styleClasses = classNames('slider round', {
        [`${color}`]: !!color,
        [`${sizes}`]: !!sizes,
        disabled: !!disabled
    })

    const onInputChange = () => {
        setIsChecked(!isChecked);
      };
    
    if (className) {
        styleClasses += ' ' + className;
    }

    let strSwitch: string = 'switch'

    let Switch = (
        <label className={strSwitch}>  
            <input 
                type="checkbox"
                checked={isChecked}
                disabled={disabled}
                onChange={onInputChange}
                onClick={onChecked}
                onClickCapture={onAction}
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