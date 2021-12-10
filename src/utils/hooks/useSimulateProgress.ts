import { useState, useEffect } from 'react';

const useSimulateProgress = () => {
  const [progress, setProgress] = useState<number>(0);

  // set interval to simulate progress
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        // reset after reaching 100
        if (prevProgress === 100) {
          return 0;
        }

        // create random value
        const diff = Math.random() * 5;

        // return whichever is smaller
        return Math.min(prevProgress + diff, 100);
      });
    }, 300);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return progress;
};

export default useSimulateProgress;
