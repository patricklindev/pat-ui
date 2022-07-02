import { IconSize } from '../Icon/Icon';

export const animateBySize = (size: IconSize, isHovering: boolean) => {
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
