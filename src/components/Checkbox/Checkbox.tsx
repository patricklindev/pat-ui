import React,{useState,useEffect}from 'react'
import { classNames } from '../../utils/classNames';
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
  const {children,className,checkboxSize,checked,icon,...rest } = props;


  const [id,setId] = useState(Date.now().toString())
  const [check,setCheck] = useState(icon ? icon : "check")
  const [boxSize,setBoxSize] = useState(checkboxSize? checkboxSize : "normal")
  const [isCheck,setIsCheck] = useState(checked !== undefined ? true : false)
  const [svg,setSvg] = useState({
    viewBox:"",
    path:""
  })


  const styleClassName = classNames('checkbox',{
    [`checkbox-${boxSize}`]: true
  })

  const handleCheck = (event:React.ChangeEvent<HTMLInputElement>) => {
    setIsCheck(event.target.checked)
  }

  useEffect(()=>{
    const svg = {
      viewBox: IconPath[`${check}`].viewBox,
      path: IconPath[`${check}`].path
    }
    setSvg(svg)
  },[])

  return (
    <div className='checkbox-container'>
      <input type="checkbox" id={id} checked={isCheck} onChange={handleCheck}/>
      <label htmlFor={id}>
        <span className={styleClassName}>
          {
          isCheck 
          ? <Icon viewBox={svg.viewBox} path={svg.path}/> 
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