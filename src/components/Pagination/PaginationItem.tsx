import React,{ FC } from 'react'
type liTypes = React.DetailedHTMLProps<React.HTMLAttributes<HTMLLIElement>, HTMLLIElement>
interface IPaginationItem { 
    callBack: ()=> void;
    builtClass?: string
} 

const PaginationItem: FC<IPaginationItem> = (props)=>{
    const { builtClass ='', callBack, children, ...rest} = props
    
    function onClickHandler(e:React.MouseEvent<HTMLDivElement>): void{ 
        callBack()
    }
    
    return(
        <div data-testid='pageButtonOuterHolder' role={'button'} className={builtClass} onClick={onClickHandler}>
        <li data-testid='pageButtons' {...(rest as liTypes)} >
           {children}
        </li>
        </div>
    )
}

export default PaginationItem
