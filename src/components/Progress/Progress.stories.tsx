import React, { useState, useEffect } from 'react';
import Progress from './Progress';

export default {
  title: 'Progress',
  component: Progress,
};

export const DefaultProgress = () => {
  // linear progress bar width
  const [width, setWidth] = useState<number>(0);

  // set interval to simulate progress
  useEffect(() => {
    const interval = setInterval(() => {
      setWidth((currWidth) => {
        // reset after reaching 100
        if (currWidth === 100) {
          return 0;
        }

        // create random value
        const diff = Math.random() * 10;

        // return whichever is smaller
        return Math.min(currWidth + diff, 100);
      });
    }, 400);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return <Progress pgValue={width} />;
};

export const DiffTypeProgress = () => {
  // linear progress bar width
  const [width, setWidth] = useState<number>(0);

  // set interval to simulate progress
  useEffect(() => {
    const interval = setInterval(() => {
      setWidth((currWidth) => {
        // reset after reaching 100
        if (currWidth === 100) {
          return 0;
        }

        // create random value
        const diff = Math.random() * 10;

        // return whichever is smaller
        return Math.min(currWidth + diff, 100);
      });
    }, 400);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      <h1>Linear</h1>
      <br />
      <Progress pgValue={width} />
      <br />

      <h1>Circular</h1>
      <br />
      <Progress pgType="circular" pgValue={width} />
      <br />
    </>
  );
};
