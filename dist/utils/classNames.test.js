import { classNames } from './classNames';
describe('classNames', function () {
    it('should return a classes string based on args', function () {
        var mockAgs = [
            'btn',
            { 'btn-default': true, 'btn-small': false },
            { 'btn-test': true },
            'test1 test2',
        ];
        var expectedResult = 'btn btn-default btn-test test1 test2';
        var result = classNames.apply(void 0, mockAgs);
        expect(result).toBe(expectedResult);
    });
});
