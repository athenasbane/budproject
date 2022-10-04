import React from 'react';
import { ITransaction } from '../../../types/Interfaces/Api.interface';
import { currencySymbol } from '../../../lib/currencySymbol.lib';
import { Container, Title, ExpenseContainer, Circle } from '../../Atoms';

const ExpenseItem = ({ amount, description, category_title }: ITransaction) => {
    return (
        <ExpenseContainer>
            <Container direction="row">
                <Circle>{description.at(0)}</Circle>
                <Container marginLeft={15} direction="column">
                    <Title backgroundColor="white" textAlign="left" textSize="medium">
                        {description}
                    </Title>
                    <Title backgroundColor="white" textAlign="left" textSize="small">
                        {category_title}
                    </Title>
                </Container>
            </Container>
            <Container>
                <Title backgroundColor="white" textSize="small" textAlign="right">
                    {currencySymbol[amount.currency_iso]}
                    {Math.abs(amount.value)}
                </Title>
            </Container>
        </ExpenseContainer>
    );
};

export default ExpenseItem;
