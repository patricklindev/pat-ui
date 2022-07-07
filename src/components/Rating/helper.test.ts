import { IconSize } from '../Icon/Icon';
import { getIconColor, getIconName, getSizeName } from './helper';

describe('getIconName', () => {
  it('should return a star name string based on star value number arg', () => {
    const mockArg2: number = 0;
    const expectedResult2 = 'star regular';
    const result2 = getIconName(mockArg2);
    expect(result2).toBe(expectedResult2);

    const mockArg1: number = 0.5;
    const expectedResult1 = 'star half';
    const result1 = getIconName(mockArg1);
    expect(result1).toBe(expectedResult1);

    const mockArg3: number = 1;
    const expectedResult3 = 'star';
    const result3 = getIconName(mockArg3);
    expect(result3).toBe(expectedResult3);
  });
});

describe('getIconColor', () => {
  it('should return an icon color string based on star value number arg ', () => {
    const mockArg1: number = 0;
    const expectedResult1 = 'grey';
    const result1 = getIconColor(mockArg1);
    expect(result1).toBe(expectedResult1);

    const mockArg2: number = 0.5;
    const expectedResult2 = 'orange';
    const result2 = getIconColor(mockArg2);
    expect(result2).toBe(expectedResult2);

    const mockArg3: number = 1;
    const expectedResult3 = 'orange';
    const result3 = getIconColor(mockArg3);
    expect(result3).toBe(expectedResult3);
  });
});

// describe('getSizeName', () => {
//   it('should return an icon size string based on icon size string and isHovering boolean', () => {
//     const mockArg1: [IconSize, boolean] = ['small', true];
//     const expectedResult1 = 'medium';
//     const result1 = getSizeName(...mockArg1);
//     expect(result1).toBe(expectedResult1);
//   });
// });
