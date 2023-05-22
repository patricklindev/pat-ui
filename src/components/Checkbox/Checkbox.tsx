import React, {
    FC,
    useEffect
  } from 'react';
  import { classNames } from '../../utils/classNames';
  import { action } from '@storybook/addon-actions';
  
  export type CheckboxSize = 'lg' | 'sm';
  export type CheckboxType =
    | 'primary'
    | 'secondary'
    | 'default'
export type CheckboxStatus = 'active' | 'inactive' |'indetermined';
    
  export interface ICheckboxProps {
    chkboxName: string;
    chkboxValue: string;
    className?: string;
    chkboxSize?: CheckboxSize;
    disabled?: boolean;
    chkboxLabel?: string;
    checked?: boolean;
    indeterminate?: boolean;
    chkboxType?: CheckboxType;
  }
  
  /**
   * A Checkbox to capture use selections.
   *
   * ```js
   * import {Checkbox} from 'pat-ui'
   * ```
   */
  
  export const Checkbox: FC<ICheckboxProps> = (props) => {
    const { chkboxName, chkboxValue, chkboxSize,  disabled, className, chkboxLabel, checked, indeterminate, chkboxType } = props;
    let styleClasses = classNames('chkbox', {
      [`chkbox-${chkboxType}`]: !!chkboxType,
      [`chkbox-${chkboxSize}`]: !!chkboxSize,
      disabled: !!disabled,
      indeterminate: !!indeterminate,
    });
    if (className) {
      styleClasses += ' ' + className;
    }

    useEffect(() => {
      Array.from(document.getElementsByClassName("indeterminate")).forEach((ele: any) => {
        ele.indeterminate = true;
      });
    }, []);

    let chkbox = (
        <div>
          <input 
            onClick={action(`${chkboxName} clicked`)}
            className={styleClasses}
            disabled={disabled}
            checked={checked}
            type="checkbox"
            id={chkboxName}
            name={chkboxName}
            value={chkboxValue}>
          </input>
          { chkboxLabel && ( <label htmlFor={chkboxName} className='chkbox-label'> {chkboxLabel}</label> )}
        </div>
        
      );
    return chkbox;
  };
  

  Checkbox.defaultProps = {
    chkboxType: 'default',
    disabled: false,
  };
  
  export default Checkbox;