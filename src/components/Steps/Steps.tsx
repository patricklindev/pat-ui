import React, { FC } from 'react';

 interface Isteps  {
     label?: string,
     description?:string,
     icons?:any,
     className?: boolean,
    handleClick?: Function,
  }

const Steps: FC<Isteps> = (props) => {
    const {label, description,icons, handleClick} = props
    return (
            <div className="step-root" > 
                <div className="icon" onClick={handleClick as any}>
                    {icons} 
                </div>
                <div className="content"> 
                    <h6><b>{label}</b></h6>
                    <p><i>{description}</i></p>
                </div>
            </div>
     
    );
};

export default Steps;