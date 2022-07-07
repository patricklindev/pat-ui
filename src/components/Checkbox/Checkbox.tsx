import React,{useState,FC}from 'react'
import { classNames } from '../../utils/classNames';
import { uid } from '../../utils/uuid';
import { IconPath } from './Icons';

import Icon from './Icon'

export type boxSize = 'ex-small'|'small' | 'normal' | 'large' | 'ex-larger';
export type iconType = 'home' | 'spinner' | 'angle down' | 'plus' | 'home' | 'users' | 'times' | 'search' | 'star' | 'moon' | 'heart' | 'smile wink' | 'truck' | 'credit card' | 'check';
export type themeColor = 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'danger' | 'dark' | 'default';

export interface ICheckboxProps {
  /** set customized style */
  className?: string;
  /** set checkbox size */
  checkSize?: boxSize
  /** make checkbox bar always check */
  checked?: boolean | undefined;
  /** disabled the checkbox */
  disabled?: boolean | undefined;
  /** add specific icon to input */
  icon?: iconType;
  /** add specific icon theme to input */
  iconTheme?: themeColor;
  /**customize checkbox color */
  checkBgTheme? : themeColor;
  //**set background theme when check on check icon */
  checkedBgTheme? : themeColor;
  /** pass a callback function out-site of props */
  onChange?: any;
  /** set label value */ 
  label?: string;
}

/**
 * Checkbox allow user to implement different styles and features
 *
 * ```js
 * import { Checkbox } from 'pat-ui'
 * ```
 */

export const Checkbox:FC<ICheckboxProps> = (props)=> {

  const { checkSize, checked, checkBgTheme,checkedBgTheme } = props;

  // toggle the checked state
  const [isCheck,setIsCheck] = useState(checked ? checked : false)

  // define a unique id when the function is mounted
  const [id,setId] = useState(uid())

  let classNameSpan;

  if(checkedBgTheme){
    classNameSpan = {
      [`checkbox-${checkSize}`]: !!checkSize,
      [`bg-iCheck-${checkedBgTheme}`]: isCheck,
    }
  }else{
    classNameSpan = {
      [`checkbox-${checkSize}`]: !!checkSize,
      [`bg-iCheck-${checkBgTheme}`]: !!checkBgTheme,
    }
  }
  // add class name
  const styleClassNameSpan = classNames('checkbox',classNameSpan)

  let classNameSVG;

  if(checkedBgTheme){
    classNameSVG = {
      [`bg-iCheck-path-${checkBgTheme}`]: !isCheck,
      [`bg-iChecked-path-${checkedBgTheme}`]: isCheck,
    }
  }else{
    classNameSVG = {
      [`bg-iCheck-path-${checkBgTheme}`]: !isCheck,
      [`bg-iChecked-path-${checkBgTheme}`]: isCheck,
    }
  }

  const styleClassNameSVG = classNames(classNameSVG)

  const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    setIsCheck(e.target.checked)
  }

  return (
    <div className='checkbox-container'>
      <input type='checkbox' onChange={handleChange} id={id} data-testid='inputCheckBox'/> 
      <label htmlFor={id}>
        <span className={styleClassNameSpan} data-testid='iconSpan'>
          <svg viewBox={IconPath['check'].viewBox} role="img" data-testid='iconSVG'>
            <path d={IconPath['check'].path} className={styleClassNameSVG}/>
          </svg>
        </span>
      </label> 
    </div>
  )
}

Checkbox.defaultProps = {
  checkBgTheme : 'default',
  checkSize: 'normal'
}

export default Checkbox;