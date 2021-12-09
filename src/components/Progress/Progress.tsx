import React, { FC, useState, useEffect, useRef } from 'react';

// progress type
export type ProgressType = 'circular' | 'linear';
// progress color
export type ProgressColor =
  | 'primary'
  | 'secondary'
  | 'success'
  | 'info'
  | 'warning'
  | 'danger'
  | 'white'
  | 'dark';
// progress size
export type ProgressSize = 'sm' | 'lg';

// props type
export interface IProgressProps {
  pgType?: ProgressType;
  pgColor?: ProgressColor;
}

export const Progress: FC<IProgressProps> = (props) => {
  // props destructure
  const { pgType, pgColor } = props;

  // linear progress bar width
  // const [width, setWidth] = useState<number>(0);

  // // interval ref
  const intervalRef = useRef<number | undefined>(undefined);

  // // set interval to simulate progress
  // useEffect(() => {
  //   intervalRef.current = window.setTimeout(() => {
  //     setWidth((width) => width + 1);
  //   }, 50);
  // }, []);

  // useEffect(() => {
  //   if (width >= 100) {
  //     window.clearInterval(intervalRef.current);
  //   }
  // }, [width]);

  return (
    <div className="linear">
      <div className="bar">Progress</div>
    </div>
  );
};

export default Progress;
