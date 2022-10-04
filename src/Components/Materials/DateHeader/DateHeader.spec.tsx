import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import DateHeader from './DateHeader';
import { mockExpense } from '../../../__mocks__/expense.mock';

describe('<DateHeader />', () => {
    it('should match snapshot', () => {
        const tree = renderer.create(<DateHeader expense={mockExpense} />).toJSON();

        expect(tree).toMatchSnapshot();
    });
});
