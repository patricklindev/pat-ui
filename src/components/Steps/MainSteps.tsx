import React from "react"
import Steps from "./Steps"
import { FaTruck } from 'react-icons/fa';
import {GrCreditCard} from 'react-icons/gr';
import{FaInfo} from "react-icons/fa"
import {FcCheckmark} from "react-icons/fc"
import {classNames} from "../../utils/classNames"

export enum StepStyle {
    Horizontal = 'horizontal',
    Vertical = 'vertical',
  }

export interface ImainSteps{
    stepStyle?: StepStyle
}

const MainSteps: React.FC<ImainSteps> = (props) => {
    const [Active, setActive] =  React.useState(false)
    const [indexGlobal,setIndexGlobal] = React.useState(-1);
    const {stepStyle} = props
    const [steps, setSteps] = React.useState(
        [
            {
                id: 0,
                label: "shipping",
                description: "Choose your shipping option",
                icon: <FaTruck /> ,
                active: false
            },
            {
                id:1,
                label: "billing",
                description: "Enter billing information",
                icon: <GrCreditCard/>,
                active: false
            },
            {
                id:2,
                label: "Confirm Order",
                description: "Verify order details",
                icon: <FaInfo/>,
                active: false
            }
        ]
    )
     let styleClasses=
    //  if(stepStyle === StepStyle.Horizontal){
    //         styleClasses = "Horizontal"
    //     }
    //  else styleClasses = "Vertical"
     classNames('step', {
        [`step-${stepStyle}`]: true
    })
     
    
    const handleClick= (index:number)=>{
        console.log("I am inside handleclick") 
        console.log("selected element is", index) 
        setActive(true)
        setIndexGlobal(index)              
    }
    if(Active){
       
        steps[indexGlobal].icon =  <FcCheckmark/>  
    }
   
    

    return (
        
        <div className={styleClasses}>
            {steps.map((value,index:number) =>(
            <div key={index} >
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