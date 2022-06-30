import { IconSize } from '../Icon/Icon';

export const animateBySize = (
  size: IconSize,
  currentHovering: number | null,
  index: number
) => {
  switch (size) {
    case 'small':
      if (currentHovering === index) {
        return 'medium';
      } else {
        return size;
      }
    case 'medium':
      if (currentHovering === index) {
        return 'large';
      } else {
        return size;
      }
    case 'large':
      if (currentHovering === index) {
        return 'big';
      } else {
        return size;
      }
    default:
      return size;
  }
};
