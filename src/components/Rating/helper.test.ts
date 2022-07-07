import { IconSize } from '../Icon/Icon';
import {
  convertSizeNameToSizeNumber,
  getCurrentHalfStars,
  getCurrentStarRating,
  getFullStars,
  getIconColor,
  getIconName,
  getSizeName,
} from './helper';
import { IStars } from './Rating';

describe('getIconName', () => {
  it('should return star regular string based on star value number arg', () => {
    const mockArg: number = 0;
    const expectedResult = 'star regular';
    const result = getIconName(mockArg);
    expect(result).toBe(expectedResult);
  });

  it('should return star half string based on star value number arg', () => {
    const mockArg: number = 0.5;
    const expectedResult = 'star half';
    const result = getIconName(mockArg);
    expect(result).toBe(expectedResult);
  });

  it('should return star string based on star value number arg', () => {
    const mockArg: number = 1;
    const expectedResult = 'star';
    const result = getIconName(mockArg);
    expect(result).toBe(expectedResult);
  });
});

describe('getIconColor', () => {
  it('should return grey color string based on star value number arg ', () => {
    const mockArg: number = 0;
    const expectedResult = 'grey';
    const result = getIconColor(mockArg);
    expect(result).toBe(expectedResult);
  });

  it('should return orange color string based on star value number arg', () => {
    const mockArg: number = 0.5;
    const expectedResult = 'orange';
    const result = getIconColor(mockArg);
    expect(result).toBe(expectedResult);
  });

  it('should return orange color string based on star value number arg', () => {
    const mockArg: number = 1;
    const expectedResult = 'orange';
    const result = getIconColor(mockArg);
    expect(result).toBe(expectedResult);
  });
});

describe('getSizeName', () => {
  it('should return medium string based on icon size string and isHovering boolean', () => {
    const mockArg: [IconSize, boolean] = ['small', true];
    const expectedResult = 'medium';
    const result = getSizeName(...mockArg);
    expect(result).toBe(expectedResult);
  });

  it('should return small string based on icon size string and isHovering boolean ', () => {
    const mockArg: [IconSize, boolean] = ['small', false];
    const expectedResult = 'small';
    const result = getSizeName(...mockArg);
    expect(result).toBe(expectedResult);
  });

  it('should return large string based on icon size string and isHovering boolean ', () => {
    const mockArg: [IconSize, boolean] = ['medium', true];
    const expectedResult = 'large';
    const result = getSizeName(...mockArg);
    expect(result).toBe(expectedResult);
  });

  it('should return medium string based on icon size string and isHovering boolean', () => {
    const mockArg: [IconSize, boolean] = ['medium', false];
    const expectedResult = 'medium';
    const result = getSizeName(...mockArg);
    expect(result).toBe(expectedResult);
  });

  it('should return big string based on icon size string and isHovering boolean', () => {
    const mockArg: [IconSize, boolean] = ['large', true];
    const expectedResult = 'big';
    const result = getSizeName(...mockArg);
    expect(result).toBe(expectedResult);
  });

  it('should return large string based on icon size string and isHovering boolean', () => {
    const mockArg: [IconSize, boolean] = ['large', false];
    const expectedResult = 'large';
    const result = getSizeName(...mockArg);
    expect(result).toBe(expectedResult);
  });
});

describe('getCurrentStarRating', () => {
  it('should return a total star rating of 0 number based on stars array', () => {
    const mockArg: IStars = new Array(5).fill(0).map((_, index) => {
      return {
        value: 0,
        index: index + 1,
      };
    });
    const expectedResult = 0;
    const result1 = getCurrentStarRating(mockArg);
    expect(result1).toBe(expectedResult);
  });

  it('should return a total star rating of 10 number based on stars array ', () => {
    const mockArg: IStars = new Array(10).fill(0).map((_, index) => {
      return {
        value: 1,
        index: index + 1,
      };
    });
    const expectedResult = 10;
    const result = getCurrentStarRating(mockArg);
    expect(result).toBe(expectedResult);
  });

  it('should return a total star rating of 10 number based on stars array', () => {
    const mockArg: IStars = new Array(15).fill(0).map((_, index) => {
      return {
        value: 0.5,
        index: index + 1,
      };
    });
    const expectedResult = 7.5;
    const result = getCurrentStarRating(mockArg);
    expect(result).toBe(expectedResult);
  });
});

describe('convertSizeNameToSizeNumber', () => {
  it('should return 20 based on small string arg', () => {
    const mockArg1: IconSize = 'small';
    const expectedResult1 = 20;
    const result1 = convertSizeNameToSizeNumber(mockArg1);
    expect(result1).toBe(expectedResult1);
  });

  it('should return 28 based on medium string arg ', () => {
    const mockArg: IconSize = 'medium';
    const expectedResult = 28;
    const result = convertSizeNameToSizeNumber(mockArg);
    expect(result).toBe(expectedResult);
  });

  it('should return 42 based on large string arg ', () => {
    const mockArg: IconSize = 'large';
    const expectedResult = 42;
    const result = convertSizeNameToSizeNumber(mockArg);
    expect(result).toBe(expectedResult);
  });
});

describe('getFullStars', () => {
  it('should return a correct new stars array based on prev stars array and index number args', () => {
    const starArr = new Array(5).fill(0).map((_, index) => {
      return {
        value: 0,
        index: index + 1,
      };
    });
    const index = 3;
    const mockArg: [IStars, number] = [starArr, index];
    const expectedResult = [
      { value: 1, index: 1 },
      { value: 1, index: 2 },
      { value: 1, index: 3 },
      { value: 0, index: 4 },
      { value: 0, index: 5 },
    ];
    const result = getFullStars(...mockArg);
    expect(result).toEqual(expectedResult);
  });
});

describe('getCurrentHalfStars', () => {
  it('should return a correct new stars array based on args when offsetX === 0 ', () => {
    // first step test when offsetX === 0
    const starArr = new Array(5).fill(0).map((_, index) => {
      return {
        value: 0,
        index: index + 1,
      };
    });
    const offsetX = 0;
    const index = 3;
    const currentSize = 40;
    const mockArg: [number, IStars, number, number] = [
      offsetX,
      starArr,
      index,
      currentSize,
    ];
    const expectedResult = [
      { value: 1, index: 1 },
      { value: 1, index: 2 },
      { value: 0, index: 3 },
      { value: 0, index: 4 },
      { value: 0, index: 5 },
    ];
    const result = getCurrentHalfStars(...mockArg);
    expect(result).toEqual(expectedResult);
  });

  it('should return a correct new stars array based on args when offsetX <= currentSize / 2 ', () => {
    // first step test when offsetX === 0
    const starArr = new Array(5).fill(0).map((_, index) => {
      return {
        value: 0,
        index: index + 1,
      };
    });
    const offsetX = 10;
    const index = 3;
    const currentSize = 40;
    const mockArg: [number, IStars, number, number] = [
      offsetX,
      starArr,
      index,
      currentSize,
    ];
    const expectedResult = [
      { value: 1, index: 1 },
      { value: 1, index: 2 },
      { value: 0.5, index: 3 },
      { value: 0, index: 4 },
      { value: 0, index: 5 },
    ];
    const result = getCurrentHalfStars(...mockArg);
    expect(result).toEqual(expectedResult);
  });

  it('should return a correct new stars array based on args when offsetX >= currentSize / 2 ', () => {
    // first step test when offsetX === 0
    const starArr = new Array(5).fill(0).map((_, index) => {
      return {
        value: 0,
        index: index + 1,
      };
    });
    const offsetX = 30;
    const index = 3;
    const currentSize = 40;
    const mockArg: [number, IStars, number, number] = [
      offsetX,
      starArr,
      index,
      currentSize,
    ];
    const expectedResult = [
      { value: 1, index: 1 },
      { value: 1, index: 2 },
      { value: 1, index: 3 },
      { value: 0, index: 4 },
      { value: 0, index: 5 },
    ];
    const result = getCurrentHalfStars(...mockArg);
    expect(result).toEqual(expectedResult);
  });
});
