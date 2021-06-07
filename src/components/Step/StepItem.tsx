import React, { FC } from 'react';

interface Isteps {
  label?: string;
  description?: string;
  icons?: any;
  className?: boolean;
  handleClick?: Function;
}

const StepItem: FC<Isteps> = (props) => {
  const { label, description, icons } = props;
  return (
    <div className='step-item'>
        <div className="step-icon">
            {icons}
        </div>
        <div className='step-text'>
            <h6><b>{label}</b></h6>
            <p><i>{description}</i></p>
        </div>
    </div>
    // <li className="active">{label}</li>
  );
};

export default StepItem;
