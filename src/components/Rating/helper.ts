import { IconSize } from '../Icon/Icon';

export const getIconName = (starValue: number) => {
  switch (starValue) {
    case 0:
      return 'star regular';
    case 0.5:
      return 'star half';
    default:
      return 'star';
  }
};

export const getIconColor = (starValue: number) => {
  if (starValue !== 0) {
    return 'orange';
  }
  return 'grey';
};

export const getSizeName = (size: IconSize, isHovering: boolean) => {
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
