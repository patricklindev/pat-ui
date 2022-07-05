import React,{useState,useEffect,FC}from 'react'
import { classNames } from '../../utils/classNames';
import { uid } from '../../utils/uuid';
import { IconPath } from './Icons';

import Icon from './Icon'

export type boxSize = 'ex-small'|'small' | 'normal' | 'large' | 'ex-larger';
export type iconType = 'home' | 'spinner' | 'angle down' | 'plus' | 'home' | 'users' | 'times' | 'search' | 'star' | 'moon' | 'heart' | 'smile wink' | 'truck' | 'credit card' | 'check';
export type themeColor = 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'danger' | 'dark' | 'light';

export interface ICheckboxProps {
  /** set customized style */
  className?: string;
  /** set checkbox size */
  checkboxSize?: boxSize
  /** make checkbox bar always check */
  checked?: boolean | undefined;
  /** disabled the checkbox */
  disabled?: boolean | undefined;
  /** add specific icon to input */
  icon?: iconType;
  /** add specific icon theme to input */
  iconTheme?: themeColor;
  /**customize checkbox color */
  checkboxColor? : themeColor;
  /** pass a callback function out-site of props */
  onChange?: ()=> void | undefined;
  /** set label value */ 
  label?: string;
  /** onClick */
  onClick?: ()=>void;
}

/**
 * Checkbox allow user to implement different styles and features
 *
 * ```js
 * import { Checkbox } from 'pat-ui'
 * ```
 */

export const Checkbox:FC<ICheckboxProps> = (props)=> {
  const {
    className,
    checkboxSize,
    checked,
    icon,
    checkboxColor,
    iconTheme,
    disabled,
    label,
    onChange : handleCheck} = props;

  // define a unique id when the function is mounted
  const [id,setId] = useState('')

  // define a default icon value
  const [checkMarkIcon,setCheckMarkIcon] = useState(icon ? icon : 'check')

  // define a default checkboxSize
  const [boxSize,setBoxSize] = useState(checkboxSize? checkboxSize : 'normal')

  // toggle the checked state
  const [isCheck,setIsCheck] = useState(checked !== undefined ? true : false)

  //state for check icon color
  const [fillCheck,setFillCheck] = useState('')

  //state for other icon color
  const [fillIcon,setFillIcon] = useState('')

  // add class name
  const styleClassName = classNames('checkbox',{
    [`checkbox-${boxSize}`]: !!boxSize,
    [`checkbox-${checkboxColor}`]: isCheck,
    [`${className}}`] : !!className
  })

  
  useEffect(()=>{
    setId(uid())
    // set check icon color when mounted
    switch(checkboxColor) {
      case 'light':
        setFillCheck('#000')
        break
      case undefined:
        setFillCheck('#000')
        break
      default:
        setFillCheck('white')
      }

      // set icon color when mounted
      switch(iconTheme) {
        case 'primary':
          setFillIcon('#20c997')
          break;
        case 'secondary':
          setFillIcon('#6c757d')
          break;
        case 'success':
          setFillIcon('#52c41a')
          break
        case 'info':
          setFillIcon('#17a2b8')
          break
        case 'warning':
          setFillIcon('#fadb14')
          break
        case 'danger':
          setFillIcon('#dc3545')
          break
        case 'light':
          setFillIcon('#f8f9fa')
          break
        case 'dark':
          setFillIcon('#343a40')
          break
        default:
          setFillIcon('#000')
        }
  },[checkboxColor,iconTheme])

  //event handler for check input
  const handleChange = (event:React.ChangeEvent<HTMLInputElement>) => {
      setIsCheck(event.target.checked)
  }

  return (
    <div className='checkbox-container'>
      <input 
        type="checkbox" 
        id={id} 
        checked={isCheck} 
        onChange={handleCheck ? handleCheck : handleChange} // replace onChange CB if onChange prop exist
        disabled={disabled} 
        style={{cursor: disabled ? 'not-allowed' : ''}}/> {/** change cursor to not-allowed when disabled */}
      <label 
        htmlFor={id} 
        style={{cursor: disabled ? 'not-allowed' : ''}}>{/** change cursor to not-allowed when disabled */}
        <span 
          className={styleClassName} 
          style={{
            border: checkMarkIcon !== 'check' ? 'none' : '', // remove border when icon is not check icon
            borderColor: disabled ? 'gray' : '', // change border color to gray when disabled
            backgroundColor: disabled ? 'gray' : '', // change background color to gray when disable
          }}>
          {
          isCheck 
          ? <Icon  // if input check is true render the icon 
          viewBox={IconPath[`${checkMarkIcon}`].viewBox} 
          path={IconPath[`${checkMarkIcon}`].path}
          fill={checkMarkIcon === 'check' ? fillCheck : fillIcon} // if icon is check icon implement color with fillCheck state else implement color with fillIcon state
          /> 
          : checkMarkIcon !== 'check' 
          ? <Icon  // if check input icon is not check icon render icon
          viewBox={IconPath[`${checkMarkIcon}`].viewBox} 
          path={IconPath[`${checkMarkIcon}`].path}
          fill='lightgray'
          />
          : null
          }
        </span>
        {label}
      </label> 
    </div>
  )
}

export default Checkbox;