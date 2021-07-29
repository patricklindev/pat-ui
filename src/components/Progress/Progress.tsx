import React from 'react';

export interface IProgressesProps {
    /** set class name */
    className?: string;
}

export const Progress: FC<IProgressesProps> = (props) => {
    const { className } = props;
    return <div></div>;
};

export default Progress;
