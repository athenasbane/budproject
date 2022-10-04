import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import { Title, Container, ExpenseContainer, Circle, LoadingSpinner } from './index';

describe('<Title />', () => {
    it.each`
        textSize
        ${'small'}
        ${'medium'}
        ${'large'}
    `('should have the correct styles when props are passed too it', ({ textSize }) => {
        const tree = renderer
            .create(
                <Title textAlign="left" textSize={textSize as 'small' | 'medium' | 'large'}>
                    Test
                </Title>,
            )
            .toJSON();

        expect(tree).toMatchSnapshot();
    });
});

describe('<Container />', () => {
    it.each`
        direction   | marginBotton | marginLeft
        ${'row'}    | ${5}         | ${5}
        ${'column'} | ${10}        | ${10}
    `('should have the styles when props are passed to it', ({ direction, marginBottom, marginLeft }) => {
        const tree = renderer
            .create(
                <Container direction={direction} marginBottom={marginBottom} marginLeft={marginLeft}>
                    Test
                </Container>,
            )
            .toJSON();

        expect(tree).toMatchSnapshot();
    });
});

describe('<ExpenseContainer />', () => {
    it('should match snapshot', () => {
        const tree = renderer.create(<ExpenseContainer>Test</ExpenseContainer>).toJSON();

        expect(tree).toMatchSnapshot();
    });
});

describe('<Circle />', () => {
    it('should match snapshot', () => {
        const tree = renderer.create(<Circle />).toJSON();

        expect(tree).toMatchSnapshot();
    });
});

describe('<LoadingSpinner />', () => {
    it('should match snapshot', () => {
        const tree = renderer.create(<LoadingSpinner />).toJSON();

        expect(tree).toMatchSnapshot();
    });
});
