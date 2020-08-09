import React from "react"
import Steps from "./Steps"
import { FaTruck } from 'react-icons/fa';
import {GrCreditCard} from 'react-icons/gr';
import{FaInfo} from "react-icons/fa"
import {FcCheckmark} from "react-icons/fc"
import {classNames} from "../../utils/classNames"
import { IconBaseProps } from 'react-icons/lib';

export enum StepStyle {
    Horizontal = 'horizontal',
    Vertical = 'vertical',
  }

export enum StepSize{
    Small = 'small',
    Midium = 'mid',
    large = 'large'
}

// interface Istepselection{
//     [index: number]: {  id: number;
//         label: string;
//         description: string;
//         icon: IconBaseProps;
//         active: boolean;
//         enable: boolean };
// }
export interface ImainSteps{
    stepStyle?: StepStyle,
    stepSize?: StepSize;
    step?: any  
}

const MainSteps: React.FC<ImainSteps> = (props) => {
    const [Active, setActive] =  React.useState(false)
    const [indexGlobal,setIndexGlobal] = React.useState(-1);
    const {stepStyle, stepSize, step} = props
    console.log(step,"in mainstep", typeof step)

    
     let styleClasses=classNames('step', {
        [`step-${stepStyle}`]: true,
        [`step-${stepSize}`]: true,
    })
     
    
    const handleClick= (index:number)=>{
        console.log("I am inside handleclick") 
        console.log("selected element is", index) 
        setActive(true)
        setIndexGlobal(index) 
                     
    }
    if(Active){
        step[indexGlobal].icon =  <FcCheckmark/>  
        console.log(step.length, indexGlobal)
        if(indexGlobal<step.length-1){
        step[indexGlobal+1].enable = true  
    }
     
    }
    return (
        
        <div className={styleClasses} >
            {/* <h5>Create your own steps...</h5> */}
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