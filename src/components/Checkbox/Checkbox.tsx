import React,{useState,useEffect,FC}from 'react'
import { classNames } from '../../utils/classNames';
import { uid } from '../../utils/uuid';
import { IconPath } from './Icons';

import Icon from "./Icon"

export type boxSize = 'ex-small'|'small' | 'normal' | 'large' | 'ex-larger';
export type iconType = 'home' | 'spinner' | 'angle down' | 'plus' | 'home' | 'users' | 'times' | 'search' | 'star' | 'moon' | 'heart' | 'smile wink' | 'truck' | 'credit card';
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
  icon?: iconType ;
  /** add specific icon theme to input */
  iconTheme?: themeColor;
  /**customize checkbox color */
  checkboxColor? : themeColor;
  /** pass a callback function out-site of props */
  onChange?: ()=> void | undefined;
  /** set label and input id value */
  checkboxId?: number;
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
  const {
    className,
    checkboxSize,
    checked,
    icon,
    checkboxId,
    checkboxColor,
    iconTheme,
    disabled,
    label,
    onChange : handleCheck} = props;

  const [id,setId] = useState<string | undefined>(checkboxId === undefined ? uid(): checkboxId.toString())
  const [checkMarkIcon,setCheckMarkIcon] = useState(icon ? icon : "check")
  const [boxSize,setBoxSize] = useState(checkboxSize? checkboxSize : "normal")
  const [isCheck,setIsCheck] = useState(checked !== undefined ? true : false)
  const [fillCheck,setFillCheck] = useState("")
  const [fillIcon,setFillIcon] = useState("")

  const styleClassName = classNames('checkbox',{
    [`checkbox-${boxSize}`]: !!boxSize,
    [`checkbox-${checkboxColor}`]: isCheck,
    [`checkbox-disable`]: !!disabled,
    [`${className}}`] : !!className
  })

  useEffect(()=>{
    switch(checkboxColor) {
      case "light":
        setFillCheck("#000")
        break
      case undefined:
        setFillCheck("#000")
        break
      default:
        setFillCheck("white")
      }

      switch(iconTheme) {
        case "primary":
          setFillIcon("#20c997")
          break;
        case "secondary":
          setFillIcon("#6c757d")
          break;
        case "success":
          setFillIcon("#52c41a")
          break
        case "info":
          setFillIcon("#17a2b8")
          break
        case "warning":
          setFillIcon("#fadb14")
          break
        case "danger":
          setFillIcon("#dc3545")
          break
        case "light":
          setFillIcon("#f8f9fa")
          break
        case "dark":
          setFillIcon("#343a40")
          break
        default:
          setFillIcon("#000")
        }
  },[])

  const handleChange = (event:React.ChangeEvent<HTMLInputElement>) => {
      setIsCheck(event.target.checked)
  }

  return (
    <div className='checkbox-container'>
      <input 
        type="checkbox" 
        id={id} 
        checked={isCheck} 
        onChange={handleCheck ? handleCheck : handleChange} 
        disabled={disabled} 
        style={{cursor: disabled ? "not-allowed" : ""}}/>
      <label 
        htmlFor={id} 
        style={{cursor: disabled ? "not-allowed" : ""}}>
        <span 
          className={styleClassName} 
          style={{
            border: checkMarkIcon !== "check" ? "none" : "",
            borderColor: disabled ? "gray" : "",
            backgroundColor: disabled ? "gray" : "",
          }}>
          {
          isCheck 
          ? <Icon 
          viewBox={IconPath[`${checkMarkIcon}`].viewBox} 
          path={IconPath[`${checkMarkIcon}`].path}
          fill={checkMarkIcon === "check" ? fillCheck : fillIcon}
          /> 
          : checkMarkIcon !== "check" 
          ? <Icon 
          viewBox={IconPath[`${checkMarkIcon}`].viewBox} 
          path={IconPath[`${checkMarkIcon}`].path}
          fill="lightgray"
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