import React from 'react';
import {IconContext} from "react-icons"
import { IconBaseProps } from 'react-icons/lib';

 interface Isteps  {
     label?: string,
     description?:string,
     icons?:IconBaseProps,
     className?: boolean,
    handleClick?: Function,
  }

 // type NativeDivClickProps = React.HTMLAttributes<HTMLAllCollection>; 

const Steps: React.FC<Isteps> = (props) => {
    const {label, description,icons, handleClick} = props
    return (
        <div >
            
            <div className="step-root" > 
                <IconContext.Provider value={{ style: {fontSize: '50px'}}}>
                <div className="truck" onClick={handleClick as any}>
                    {icons} 
                </div>
                </IconContext.Provider>
                <div className="content"> 
            <p><b>{label}</b></p>
            <p><i>{description}</i></p>
                </div>
            </div>
            </div>
     
    );
};

export default Steps;