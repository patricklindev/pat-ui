import { IconColor, IconSize } from '../Icon/Icon';
import { IStars } from './Rating';

export const getIconName = (starValue: number): string => {
  switch (starValue) {
    case 0:
      return 'star regular';
    case 0.5:
      return 'star half';
    default:
      return 'star';
  }
};

export const getIconColor = (starValue: number): IconColor => {
  if (starValue !== 0) {
    return 'orange';
  }
  return 'grey';
};

export const getSizeName = (size: IconSize, isHovering: boolean): IconSize => {
  switch (size) {
    case 'small':
      if (isHovering) {
        return 'medium';
      }
      return size;

    case 'medium':
      if (isHovering) {
        return 'large';
      }
      return size;

    case 'large':
      if (isHovering) {
        return 'big';
      }
      return size;

    default:
      return size;
  }
};

export const getCurrentStarRating = (stars: IStars) => {
  return stars
    .map((star) => star.value)
    .reduce((value, count) => {
      return (value += count);
    }, 0);
};

export const convertSizeNameToSizeNumber = (size: IconSize): number => {
  switch (size) {
    case 'small':
      return 20;
    case 'medium':
      return 28;
    case 'large':
      return 42;
    default:
      return 28;
  }
};

// if there is no half prop
export const getFullStars = (stars: IStars, index: number): IStars => {
  return stars.map((star) => {
    if (star.index <= index) {
      return {
        ...star,
        value: 1,
      };
    }

    return {
      ...star,
      value: 0,
    };
  });
};

// const stars = [{ id: 1, value: 1 }, { id: 2, value: 1 }, {3}, {}, {}];
// if there is half prop
//  if star index === current index
// if offsetX === 0 (star index - 1) number of  stars value to be 1, rest will be 0
// if offsetX <= size / 2 (star index - 1) number of stars value to be 1 but current index star value to be .5 and rest will be 0
// if offsetX >= size / 2 star index number of stars value to be 1 and rest will be 0
export const getCurrentHalfStars = (
  offsetX: number,
  stars: IStars,
  index: number,
  currentSize: number
): IStars => {
  return stars.map((star) => {
    if (offsetX === 0) {
      if (star.index < index) {
        return {
          ...star,
          value: 1,
        };
      }

      return {
        ...star,
        value: 0,
      };
    }

    if (offsetX <= currentSize / 2) {
      if (star.index < index) {
        return {
          ...star,
          value: 1,
        };
      }

      if (star.index === index) {
        return {
          ...star,
          value: 0.5,
        };
      }

      return {
        ...star,
        value: 0,
      };
    }

    if (offsetX >= currentSize / 2) {
      if (star.index <= index) {
        return {
          ...star,
          value: 1,
        };
      }

      return {
        ...star,
        value: 0,
      };
    }
    return star;
  });
};

export const getDefaultHalfStars = (
  stars: IStars,
  defaultRating: number
): IStars => {
  return stars.map((star) => {
    if (star.index <= defaultRating) {
      return {
        ...star,
        value: 1,
      };
    }
    if (star.index === defaultRating + 0.5) {
      return {
        ...star,
        value: 0.5,
      };
    }

    return {
      ...star,
      value: 0,
    };
  });
};
