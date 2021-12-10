import React from 'react';
import Progress from './Progress';
import useSimulateProgress from '../../utils/hooks/useSimulateProgress';

export default {
  title: 'Progress',
  component: Progress,
};

export const DefaultProgress = () => {
  const progress = useSimulateProgress();

  return <Progress pgValue={progress} />;
};

export const DiffTypeProgress = () => {
  const progress = useSimulateProgress();

  return (
    <>
      <h1>Linear</h1>
      <br />
      <Progress pgValue={progress} />
      <br />

      <h1>Circular</h1>
      <br />
      <Progress pgType="circular" pgValue={progress} />
      <br />
    </>
  );
};
