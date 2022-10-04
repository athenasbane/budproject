import React from 'react';
import MainLayout from './Layouts/Main.layout';
import MainPage from './Pages/Main';
import GlobalStyles from './styles/global';

const App = () => {
    return (
        <>
            <GlobalStyles />
            <MainLayout>
                <MainPage />
            </MainLayout>
        </>
    );
};

export default App;
