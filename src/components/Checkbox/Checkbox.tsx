import React,{useState,FC,useEffect}from 'react'
import { classNames } from '../../utils/classNames';
import { uid } from '../../utils/uuid';
import { IconPath } from './Icons';

export type boxSize = 'ex-small'|'small' | 'normal' | 'large' | 'ex-larger';
export type iconType = 'home' | 'spinner' | 'angle down' | 'plus' | 'home' | 'users' | 'times' | 'search' | 'star' | 'moon' | 'heart' | 'smile wink' | 'truck' | 'credit card' | 'check' | 'batch';
export type themeColor = 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'danger' | 'dark' | 'default';

export interface ICheckboxProps {
  /** set customized style */
  className?: string;
  /** set checkbox size */
  checkSize?: boxSize
  /** make checkbox bar always check */
  checked?: boolean ;
  /** add specific icon to input */
  icon?: iconType;
  /** add specific icon theme to input */
  iconTheme?: themeColor;
  /**customize checkbox color */
  checkBgTheme? : themeColor;
  //**set background theme when check on check icon */
  checkedBgTheme? : themeColor;
  /** pass a callback function out-site of props */
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
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

  const { checkSize, checked, checkBgTheme,checkedBgTheme, icon, iconTheme,label,onChange } = props;

  // toggle the checked state
  const [isCheck,setIsCheck] = useState(checked ? checked : false)

  // define a unique id when the function is mounted
  const [id,setId] = useState(uid())

  let classNameSpan;

  //if user defined a background theme on component for checked state
  if(checkedBgTheme){
    classNameSpan = {
      //class for control box size if user define checkSize prop
      [`checkbox-${checkSize}`]: !!checkSize,
      //change the background color depend on checkedBgTheme when user checked
      [`bg-iCheck-${checkedBgTheme}`]: isCheck,
    }
  }else{ //when user not provide any background theme for check state

    if(icon !== 'check'){ //if the icon is not check icon
      classNameSpan = {
        //class for control box size
        [`checkbox-${checkSize}`]: !!checkSize,
        // remove the span border
        'bg-iOther-default': true,
      }
    }else{ // if the icon is check icon
      classNameSpan = {
        // class for control box size
        [`checkbox-${checkSize}`]: !!checkSize,
        // class that is control the background color when user pass checkBgTheme prop for check icon when uncheck
        [`bg-iCheck-${checkBgTheme}`]: !!checkBgTheme,
      }
    }
  }


  let classNameSVG;

  // when user define a background theme on check
  if(checkedBgTheme){
    classNameSVG = {
      // define the check icon path value depends on the checkBgTheme when uncheck 
      [`bg-iCheck-path-${checkBgTheme}`]: !isCheck,

      // define the check icon path value depends on the checkBgTheme when check 
      [`bg-iChecked-path-${checkedBgTheme}`]: isCheck,
    }
  }else{ // when user don't provide checkedBgTheme
    if(icon !== 'check'){ // if the icon is not check
      if(iconTheme){
        classNameSVG = {
          //set default icon color when uncheck
          'bg-iOther-path-default': !isCheck,
          // set icon color when check
          [`bg-iOther-check-path-${iconTheme}`]: isCheck
        }
        // add hover style with before pseudo element when use provide iconTheme
        classNameSpan = {
          ...classNameSpan,
          [`bg-span-iOther-hover-${iconTheme}`]: isCheck
        }
      }else{ // if you don't define icon color
        classNameSVG = {
          // set both check and uncheck to be default color
          'bg-iOther-path-default': !isCheck,
          'bg-iOther-check-path-default': isCheck
        }
      }
    }else{ // if the icon is check
      classNameSVG = {
        //set check icon uncheck color depends on checkBgTheme props
        [`bg-iCheck-path-${checkBgTheme}`]: !isCheck,
        //set check icon check color depends on checkBgTheme props
        [`bg-iChecked-path-${checkBgTheme}`]: isCheck,
      }
    }
  }

    // add class name for SVG
  const styleClassNameSVG = classNames(classNameSVG)
    // add class name for Span
  const styleClassNameSpan = classNames('checkbox',classNameSpan)

  const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
      setIsCheck(e.target.checked)
  }

  useEffect(()=>{
    if(checked){
      setIsCheck(checked)
    }
  },[checked])


  return (
    <div className='checkbox-container'>
      <input type='checkbox' onChange={ onChange ? onChange : handleChange} checked={isCheck} id={id} data-testid='inputCheckBox'/> 
      <label htmlFor={id} data-testid='iconLabel' className='labelContent'>
        <span className={styleClassNameSpan} data-testid='iconSpan'>
          <svg viewBox={IconPath[`${icon}`].viewBox} role="img" data-testid='iconSVG'>
            <path d={IconPath[`${icon}`].path} className={styleClassNameSVG} data-testid='iconSVGPath'/>
          </svg>
        </span>
        {label}
      </label> 
    </div>
  )
}

Checkbox.defaultProps = {
  checkBgTheme : 'default',
  checkSize: 'normal',
  icon: 'check'
}

export default Checkbox;