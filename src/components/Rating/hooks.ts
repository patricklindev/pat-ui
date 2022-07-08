import { useEffect, useState } from 'react';

// rating label will change according to currentRating
export const useCurrentRatingLabel = (
  currentRating: number,
  ratingCount: number
) => {
  const [labelName, setLabelName] = useState('');

  const lowTile = Math.round((ratingCount as number) / 4);
  const midTile = Math.round((ratingCount as number) / 2);

  useEffect(() => {
    if (currentRating <= lowTile) {
      setLabelName('Poor');
    } else if (currentRating <= midTile) {
      setLabelName('Good');
    } else {
      setLabelName('Excellent!');
    }
  }, [currentRating, ratingCount]);

  return {
    labelName,
  };
};
