import { classNames } from './classNames';

describe('classNames', () => {
    test('test with only first parameter', () => {
        expect(classNames('someClass')).toBe('someClass');
    });

    test('test with additional class', () => {
        expect(classNames('someClass', {}, [])).toBe('someClass');
    });

    test('test with modes', () => {
        const expected = 'someClass hovered scrollable class1 class2';
        expect(classNames(
            'someClass',
            { hovered: true, scrollable: true },
            ['class1', 'class2'],
        )).toBe(expected);
    });

    test('test with modes false', () => {
        const expected = 'someClass hovered class1 class2';
        expect(classNames(
            'someClass',
            { hovered: true, scrollable: false },
            ['class1', 'class2'],
        )).toBe(expected);
    });

    test('test with modes undefined', () => {
        const expected = 'someClass hovered class1 class2';
        expect(classNames(
            'someClass',
            { hovered: true, scrollable: undefined },
            ['class1', 'class2'],
        )).toBe(expected);
    });
});
