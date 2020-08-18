import React from "react"
import { FC} from 'react';
import Steps from "./Steps"
import {classNames} from "../../utils/classNames"
import Icon from "../Icon"


export enum StepStyle {
    Horizontal = 'horizontal',
    Vertical = 'vertical',
}

export enum StepSize{
    Small = 'small',
    Midium = 'mid',
    large = 'large'
}

export interface ImainSteps{
    stepStyle?: StepStyle,
    stepSize?: StepSize;
    step?: any  
}

const MainSteps: FC<ImainSteps> = (props) => {
    const [Active, setActive] =  React.useState(false)
    const [indexGlobal,setIndexGlobal] = React.useState(-1);
    const {stepStyle, stepSize, step} = props
   
     let styleClasses=classNames('step', {
        [`step-${stepStyle}`]: true,
        [`step-${stepSize}`]: true,
    })
     
    
    const handleClick= (index:number)=>{
        console.log("selected element is", index) 
        setActive(true)
        setIndexGlobal(index)                 
    }
    if(Active){
        step[indexGlobal].icon = <Icon name="check"/> 
        console.log(step.length, indexGlobal)
        if(indexGlobal<step.length-1){
        step[indexGlobal+1].enable = true  
    }
     
    }
    return (
        <div className={styleClasses} >
            {step.map((value:any,index:number) =>(
            <div key={index} className={step[index].enable?'enable':'disable'}>
            <Steps label={value.label} 
                    description={value.description}
                    icons={value.icon} 
                    handleClick={()=>handleClick(index)}
                    />
            </div>
            ))}
        </div>
       
      
    );
};

export default MainSteps;