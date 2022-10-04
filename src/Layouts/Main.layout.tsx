import React from 'react';
import { Container, Title } from '../Components/Atoms';
import styled from 'styled-components';

const PageContainer = styled.div`
    min-width: 500px;
    margin: 0 auto 0 auto;
    max-width: 1080px;
`;

const MainLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <Container marginBottom={20}>
                <Title color="black">BUD DATA</Title>
            </Container>
            <PageContainer>{children}</PageContainer>
        </>
    );
};

export default MainLayout;
