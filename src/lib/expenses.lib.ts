import { IApi } from '../types/Interfaces/Api.interface';

export const expenseFilter = (data: IApi) => {
    /**
     * This assumes that the endpoint as converted the values into a
     * common currency. If not then a call would have to be made
     * before sorting to convert all the values.
     */
    const expenses = data.transactions.filter((transaction) => {
        return transaction.amount.value < 0;
    });

    return expenses
        .sort((a, b) => b.amount.value - a.amount.value)
        .slice(0, 10)
        .sort((a, b) => {
            return new Date(b.date).getTime() - new Date(a.date).getTime();
        });
};
