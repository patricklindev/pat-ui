import React, { useState, FC, useEffect } from 'react';
import { classNames } from '../../utils/classNames';
import Button from '../Button';
import Icon from '../Icon';


interface IPaginationProps {
  classes?: string;
  color?: 'primary'|'secondary'|'standard';
  size?: 'small'|'medium'|'large';
  variant?:'outlined'|'text';
  shape?:'rounded' | 'circular'; 
  count: number;
  //sx
  boundryCount?: number;
  defaultPage?: number;
  disabled?:boolean;
  //getItemAriaLabel
  hideNextButton?:boolean;
  hidePrevButton?:boolean;
  onChange?:Function;
  page?:number;
  //renderItem?:Function;// on progress
  showFirstButton?:boolean;
  showLastButton?:boolean;
  siblingCount?:number;

}

/**
 * An Pagination with different styling and feature.
 *
 * ```js
 * import {Pagination} from 'pat-ui'
 * ```
 */
const Pagination: FC<IPaginationProps> = (props) => {
  const {
    classes,
    color,
    size,
    variant,
    shape,
    disabled,
    ...rest
  } = props;
  const [page,setPage] = useState(rest.defaultPage || 1);
  function change(i:number){
    if(!rest.page){
      setPage(i);
    }
    if(rest.onChange){
      rest.onChange(i);
      console.log(i);
    }
  }
  useEffect(()=>{
    if(rest.page){
      setPage(rest.page);
    }
  },[rest.page]
  )
  let styleClasses = classNames('ui-pagination', {
    'pagi-disabled': !!disabled,
    [`pagi-${size}`]: !!size,
    [`pagi-${color}`]: !!color,
    [`pagi-${variant}`]: !!variant,
    [`pagi-${shape}`]: !!shape,
  });
  if(classes){
    styleClasses+=' '+ classes;
  }
  const FirstButton = <Button className='pagi-btn' key={1+rest.count*3} onClick={()=>{change(1)}} disabled={disabled||page===1}><Icon className='pagi-icon' name="first"></Icon></Button>
  const LastButton = <Button className='pagi-btn' key = {2+rest.count*3} onClick={()=>{change(rest.count)} } disabled={disabled||page===rest.count}><Icon className='pagi-icon' name="last"></Icon></Button>
  const prevButton = <Button className='pagi-btn' key = {3+rest.count*3}  onClick={()=>{change(page-1)}} disabled={disabled||page===1}><Icon className='pagi-icon' name="angle left"></Icon></Button>
  const nextButton = <Button className='pagi-btn' key = {4+rest.count*3} onClick={()=>{change(page+1)}} disabled={disabled||page===rest.count}><Icon className='pagi-icon' name="angle right"></Icon></Button>
  const omitPart =(i:number)=> <div className='pagi-omit' key={4+i+rest.count*3}>...</div>
  let renderItem = [];
  if(rest.showFirstButton){
    renderItem.push(FirstButton);
  }
  if(!rest.hidePrevButton){
    renderItem.push(prevButton);
  }
  const firstNumber = []
  const boundryCnt = rest.boundryCount?rest.boundryCount:1;
  const siblingCnt = rest.siblingCount?rest.siblingCount:1;
  for(var i=1;i<=boundryCnt&&i<=rest.count;i++){
    firstNumber.push(i);
  }
  renderItem = renderItem.concat(firstNumber.map((i)=><Button key={i} className={'pagi-btn '+ (page===i?'pagi-btn-current':'')} onClick={()=>{change(i)}} disabled={disabled}>{i}</Button>));
  const secondNumber = []
  if(page-siblingCnt-1<=boundryCnt){
    for(var i=boundryCnt+1;i<=page+siblingCnt&&i<=rest.count;i++){
    secondNumber.push(i);
  }
  }else{
    renderItem.push(omitPart(1));
    for(var i=page-siblingCnt;i<=page+siblingCnt&&i<=rest.count;i++){
    secondNumber.push(i);
  }
}
renderItem = renderItem.concat(secondNumber.map((i)=><Button key={i+rest.count*1} className={'pagi-btn '+ (page===i?'pagi-btn-current':'')} onClick={()=>{change(i)}} disabled={disabled}>{i}</Button>));
  const thirdNumber = []
  if(page+siblingCnt+1>=rest.count+1-boundryCnt){
    for(var i=page+siblingCnt+1;i<=rest.count;i++){
    thirdNumber.push(i);
  }
  }else{
    renderItem.push(omitPart(2));
    for(var i=rest.count+1-boundryCnt;i<=rest.count;i++){
    thirdNumber.push(i);
  }
}
  renderItem = renderItem.concat(thirdNumber.map((i)=><Button key={i+rest.count*2} className={'pagi-btn '+ (page===i?'pagi-btn-current':'')} onClick={()=>{change(i)}} disabled={disabled}>{i}</Button>));
  if(!rest.hideNextButton){
    renderItem.push(nextButton);
  }
  if(rest.showLastButton){
    renderItem.push(LastButton);
  }
  return (
    <div className={styleClasses}>
      {renderItem.map(i=>i)}
    </div>
  );
};

export default Pagination;
