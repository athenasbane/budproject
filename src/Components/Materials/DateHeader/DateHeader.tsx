import React from 'react';
import { ITransaction } from '../../../types/Interfaces/Api.interface';
import { Container, Title } from '../../Atoms';
import ExpenseItem from '../../Molecules/ExpenseItem/ExpenseItem';

interface IProps {
    expense: ITransaction;
}

const DateHeader = ({ expense }: IProps) => {
    return (
        <Container direction="column">
            <Title textAlign="left" color="white">
                {expense.date.split('-').reverse().join('/')}
            </Title>
            <ExpenseItem {...expense} key={expense.id} />
        </Container>
    );
};

export default DateHeader;
