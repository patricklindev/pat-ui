import React, { useState, useEffect, useRef, FC, ChangeEvent, InputHTMLAttributes} from 'react';
import { CheckboxPaths } from './Checkboxes';

type CheckboxColor = 'primary' | 'secondary' | 'default' | 'green' | 'purple';
type CheckboxSize = 'small' | 'medium' | 'large';
type CheckboxIcon = 'checkbox' | 'favorite' | 'bookmark';
type labelPosition = 'top' | 'right' | 'bottom' | 'left';

export interface CheckboxProps {
  color?: CheckboxColor;
  checkboxSize?: CheckboxSize;
  label?: string;
  labelPosition?: labelPosition;
  checked?: boolean;
  indeterminate?: boolean;
  onChange?: (e: ChangeEvent) => void;
  uncheckedIcon?: CheckboxIcon;
  checkedIcon?: CheckboxIcon;
  disabled?: boolean;
}

type NativeInputProps = InputHTMLAttributes<HTMLInputElement>;
type CheckboxPropsAndAttributes = CheckboxProps & NativeInputProps;

export const Checkbox: FC<CheckboxPropsAndAttributes> = (props) => {
  const {
    color='default', 
    checkboxSize='medium', 
    label='', 
    labelPosition='right', 
    checked, 
    indeterminate=false, 
    onChange, 
    checkedIcon='checkbox', 
    uncheckedIcon='checkbox', 
    disabled=false,
    ...rest
  } = props;

  const [isChecked, setIsChecked] = useState(false);
  const [animationTrigger, setAnimationTrigger] = useState(false);
  const checkboxRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (checkboxRef.current !== null) {
      checkboxRef.current.indeterminate = indeterminate;
    }
  }, [checkboxRef, indeterminate]); 
  
  const svgPath = () => {
    if (indeterminate === true) return CheckboxPaths[checkedIcon].indeterminatePath;
    else if (checked === undefined) return isChecked ? CheckboxPaths[checkedIcon].checkedPath : CheckboxPaths[uncheckedIcon].uncheckedPath;
    else return checked ? CheckboxPaths[checkedIcon].checkedPath : CheckboxPaths[uncheckedIcon].uncheckedPath;
  }

  const handleAnimation = () => {
    setAnimationTrigger(true);
    setTimeout(() => {
      setAnimationTrigger(false);
    }, 500);
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (typeof onChange === 'function') onChange(e);
    else setIsChecked(prev => !prev);
    handleAnimation();
  }

  return (
    <div className={`chkbx-container chkbx-container-${labelPosition}`}>
      <div className={`chkbx-label label-disabled-${disabled} chkbx--label-${labelPosition}`} data-testid='innerDiv'>
        <input 
          className={`chkbx chkbx--${checkboxSize} chkbx--${color}`}
          id='checkbox'
          type='checkbox'
          ref = {checkboxRef}
          checked={checked === undefined ? isChecked : checked}
          onChange={handleChange}
          disabled={disabled}
          {...(rest as NativeInputProps)}
        />
        <div className='chkbx--hover-effect'></div>
        <div className={`chkbx--ripple-effect chkbx--ripple-effect-${color} chkbx--ripple-effect-${animationTrigger}`}></div>
        <svg 
          className={`chkbx--svg chkbx--svg-${checkboxSize} chkbx--svg-${color}`}
          viewBox='0 0 24 24'
          aria-hidden={true}
          data-testid='svg'
        >
          <path d={svgPath()} className={`path--checked-${checked === undefined ? isChecked : checked}`} data-testid='path'></path>
        </svg>
      </div>
      <span>{label}</span>
    </div>
  );
}

export default Checkbox;