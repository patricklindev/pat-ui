import {classNames, ClassNamesArg} from './classNames';

describe('classNames', () => {
  it('should return a classes string based on args', () => {
    const mockAgs: ClassNamesArg[] = [
      'btn',
      {'btn-default': true, 'btn-small': false},
      {'btn-test': true},
      'test1 test2',
    ];
    const expectedResult = 'btn btn-default btn-test test1 test2';
    const result = classNames(...mockAgs);
    expect(result).toBe(expectedResult);
  });

  it('should return appropriate class name for rating',()=>{
    const mockAgs : ClassNamesArg[] = [
      'rating',
      {
        [`thumb__item`]:!true,
        [`thumb__item-disabled`]:true,
      }
    ];

    const expectedResults = 'rating thumb__item-disabled'
    const result = classNames(...mockAgs);
    expect(result).toBe(expectedResults)
  })
});
