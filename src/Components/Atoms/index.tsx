import styled, { keyframes } from 'styled-components';

const fontSize = {
    small: '1em',
    medium: '1.5em',
    large: '2em',
};

export const Title = styled.h1<{
    color?: string;
    textSize?: keyof typeof fontSize;
    textAlign?: 'center' | 'left' | 'right';
    backgroundColor?: string;
}>`
    font-size: ${({ textSize }) => (textSize ? fontSize[textSize] : '1.5em')};
    text-align: ${({ textAlign }) => textAlign || 'center'};
    color: ${({ color }) => color || 'black'};
    background-color: ${({ backgroundColor }) => backgroundColor || 'transparent'};
`;

export const Container = styled.div<{
    direction?: 'row' | 'column';
    marginBottom?: number;
    marginLeft?: number;
}>`
    display: flex;
    flex-direction: ${({ direction }) => direction || 'row'};
    justify-content: space-evenly;
    margin: ${({ marginLeft, marginBottom }) => '20px ' + '0px ' + marginBottom || 0 + 'px ' + marginLeft || 0 + 'px'};
`;

export const ExpenseContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 1px;
    margin-bottom: 10px;
    align-content: 'centre';
    background-color: white;
    padding: 15px;
    box-shadow: 10px 10px 5px #000000;
    border-radius: 2px;
`;

export const Circle = styled.h1`
    background-color: #ffc0c7;
    border-radius: 50px;
    height: 50px;
    width: 50px;
    text-align: center;
    line-height: 10px;
    padding: 20px 0;
    margin-right: 10px;
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const LoadingSpinner = styled.div`
    width: 48px;
    height: 48px;
    border: 5px solid #fff;
    border-bottom-color: transparent;
    border-radius: 50%;
    display: inline-block;
    box-sizing: border-box;
    animation: ${rotate} 1s linear infinite;
`;
