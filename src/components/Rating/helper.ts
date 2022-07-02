import { IconColor, IconSize } from '../Icon/Icon';

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

export const getSizeNumberByName = (size: IconSize): number => {
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
