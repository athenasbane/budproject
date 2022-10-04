import React, { useState, useEffect } from 'react';
import { API_ENDPOINT } from '../../Constants/API';
import { expenseFilter } from '../../lib/expenses.lib';
import { ITransaction } from '../../types/Interfaces/Api.interface';
import ExpenseItem from '../../Components/Molecules/ExpenseItem/ExpenseItem';
import DateHeader from '../../Components/Materials/DateHeader/DateHeader';
import styled from 'styled-components';
import { LoadingSpinner } from '../../Components/Atoms';

const ExpenseBox = styled.main`
    max-width: 1040px;
    border-radius: 15px;
    padding: 50px;
    border: 1px solid white;
    background-color: #262626;
    box-shadow: 10px 10px 5px #000000;
`;

const MainPage = () => {
    const [expenses, setExpenses] = useState<ITransaction[]>();
    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch(API_ENDPOINT);
                const apiData = await response.json();
                setExpenses(expenseFilter(apiData));
            } catch (e) {
                alert('Sorry! We seem to be experiencing an issue right now please try again later');
            }
        }

        fetchData();
    }, []);

    let currentDate = '';

    const items =
        expenses?.map((expense) => {
            if (expense.date !== currentDate) {
                currentDate = expense.date;
                return <DateHeader key={expense.id} expense={expense} />;
            }
            return <ExpenseItem {...expense} key={expense.id} />;
        }) || [];

    return <ExpenseBox>{items.length ? items : <LoadingSpinner />}</ExpenseBox>;
};

export default MainPage;
