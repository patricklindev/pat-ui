import React,{useState,useEffect}from 'react'
import { classNames } from '../../utils/classNames';
import { uid } from '../../utils/uuid';
import { IconPath } from './Icons';


import Icon from "./Icon"
import { url } from 'inspector';

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
  icon?: string ;
  /** add specific icon to input bar */
  iconTheme?: string;
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
  const {children,className,checkboxSize,checked,icon,checkboxId,checkboxColor,iconTheme,...rest } = props;


  const [id,setId] = useState<string | undefined>(checkboxId === undefined ? uid(): checkboxId.toString())
  const [checkMark,setCheckMark] = useState(icon ? icon : "check")
  const [boxSize,setBoxSize] = useState(checkboxSize? checkboxSize : "normal")
  const [isCheck,setIsCheck] = useState(checked !== undefined ? true : false)
  // const [themeIcon, setThemeIcon] = useState(iconTheme === undefined ?  )
  const [fillCheck,setFillCheck] = useState("")
  const [fillIcon,setFillIcon] = useState("")

  const styleClassName = classNames('checkbox',{
    [`checkbox-${boxSize}`]: !!boxSize,
    [`checkbox-${checkboxColor}`]: isCheck,
  })

  useEffect(()=>{
    switch(checkboxColor) {
      case "primary":
        setFillCheck("white")
        break;
      case "secondary":
        setFillCheck("white")
        break;
      case "success":
        setFillCheck("white")
        break
      case "info":
        setFillCheck("white")
        break
      case "warning":
        setFillCheck("white")
        break
      case "danger":
        setFillCheck("white")
        break
      case "light":
        setFillCheck("#000")
        break
      case "dark":
        setFillCheck("white")
        break
      default:
        setFillCheck("#000")
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

  const handleCheck = (event:React.ChangeEvent<HTMLInputElement>) => {
    setIsCheck(event.target.checked)
  }

  console.log("it me",styleClassName)

  return (
    <div className='checkbox-container'>
      <input type="checkbox" id={id} checked={isCheck} onChange={handleCheck}/>
      <label htmlFor={id}>
        <span className={styleClassName} style={{border: checkMark !== "check" ? "none" : ""}}>
          {
          isCheck 
          ? <Icon 
          viewBox={IconPath[`${checkMark}`].viewBox} 
          path={IconPath[`${checkMark}`].path}
          fill={checkMark === "check" ? fillCheck : fillIcon}
          /> 
          : checkMark !== "check" 
          ? <Icon 
          viewBox={IconPath[`${checkMark}`].viewBox} 
          path={IconPath[`${checkMark}`].path}
          fill="lightgray"
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