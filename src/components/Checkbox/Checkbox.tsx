import React,{useState,useEffect}from 'react'
import { classNames } from '../../utils/classNames';
import { uid } from '../../utils/uuid';
import { IconPath } from './Icons';


import Icon from "./Icon"

interface ICheckboxProps {
  /** set customized style */
  className?: string;
  /** set checkbox size */
  checkboxSize?: 'ex-small'|'small' | 'normal' | 'large' | 'ex-larger';
  /** make checkbox bar always check */
  checked?: boolean;
  /** disabled the checkbox */
  disabled?: boolean;
  /** add specific icon to input bar */
  icon?: string | { [key: string]: string | boolean };
  /**customize checkbox color */
  checkboxColor? : string
  /**checkbox label */
  checkBoxLabel?: string
  /**change event */
  onChange?: ()=> void
  // id value 
  checkboxId?: number
}

const Checkbox: React.FC<ICheckboxProps> = (props)=> {
  const {children,className,checkboxSize,checked,icon,checkboxId,checkboxColor,...rest } = props;


  const [id,setId] = useState<string | undefined>(checkboxId === undefined ? uid(): checkboxId.toString())
  const [checkMark,setCheckMark] = useState(icon ? icon : "check")
  const [boxSize,setBoxSize] = useState(checkboxSize? checkboxSize : "normal")
  const [isCheck,setIsCheck] = useState(checked !== undefined ? true : false)
  const [theme,setTheme] = useState(checkboxColor === undefined ? null : checkboxColor)
  const [fill,setFill] = useState("")

  const styleClassName = classNames('checkbox',{
    [`checkbox-${boxSize}`]: !!boxSize,
    [`checkbox-${checkboxColor}`]: isCheck,
  })

  useEffect(()=>{
    switch(theme) {
      case "primary":
        setFill("white")
        break;
      case "secondary":
        setFill("white")
        break;
      case "success":
        setFill("white")
        break
      case "info":
        setFill("white")
        break
      case "warning":
        setFill("white")
        break
      case "danger":
        setFill("white")
        break
      case "light":
        setFill("#000")
        break
      case "dark":
        setFill("white")
        break
      default:
        setFill("#000")
      }
  },[])

  const handleCheck = (event:React.ChangeEvent<HTMLInputElement>) => {
    setIsCheck(event.target.checked)
  }

  console.log("it me",styleClassName)

  return (
    <div className='checkbox-container'>
      <input type="checkbox" id={id} checked={isCheck} onChange={handleCheck}/>
      <label htmlFor={id}>
        <span className={styleClassName}>
          {
          isCheck 
          ? <Icon 
          viewBox={IconPath[`${checkMark}`].viewBox} 
          path={IconPath[`${checkMark}`].path}
          fill={fill}
          /> 
          : null
          }
        </span>
      </label> 
    </div>
  )
}

Checkbox.defaultProps = {
}

export default Checkbox


{/* <svg
className={styleClasses}
viewBox={IconPath[name].viewBox}
height={height}
>
<path fill={color} fill-opacity=".25" d={IconPath[name].path} />
</svg> */}