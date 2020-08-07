import {classNames, ClassNamesArg} from './classNames';

describe('classNames', () => {
  it('should return component style', () => {
    const mockAgs: ClassNamesArg[] = [
      'step',
      {'step-horizontal': true},
      {'step-test': true}
    ];
    const expectedResult = 'step step-horizontal step-test';
    const result = classNames(...mockAgs);
    expect(result).toBe(expectedResult);
  });
});
