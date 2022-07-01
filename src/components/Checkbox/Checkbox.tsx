import React,{useState}from 'react'
import { classNames } from '../../utils/classNames';

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
}

const Checkbox: React.FC<ICheckboxProps> = (props)=> {
  const { className,checkboxSize,checked,...rest } = props;
  const [check,setCheck] = useState(checked ? true : false)
  const styleClassName = classNames('puCheckbox',{
    [`puCheckbox-${checkboxSize}`]: true
  })

  const handleCheck = (event:React.ChangeEvent<HTMLInputElement>)=>{
    setCheck(!check)
  }

  return (
    <>
      <input type="checkbox" checked={check} className={styleClassName} onChange={handleCheck}/>
    </>
  )
}

Checkbox.defaultProps = {
  checkboxSize: "normal"
}

export default Checkbox