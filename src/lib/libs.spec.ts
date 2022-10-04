import { mockExpectExpence, mockApi } from '../__mocks__/expense.mock';
import { expenseFilter } from './expenses.lib';

describe('expenseFilter', () => {
    it('should return the correct data when transactions object is passed to it', () => {
        expect(expenseFilter(mockApi)).toMatchObject(mockExpectExpence);
    });
});
