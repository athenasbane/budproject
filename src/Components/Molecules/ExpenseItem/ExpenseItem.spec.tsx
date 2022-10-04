import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import ExpenseItem from './ExpenseItem';
import { mockExpense } from '../../../__mocks__/expense.mock';

describe('<ExpenseItem />', () => {
    it('should match snapshot', () => {
        const tree = renderer.create(<ExpenseItem {...mockExpense} />).toJSON();

        expect(tree).toMatchSnapshot();
    });
});
