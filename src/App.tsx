import React from 'react';
import { BrowserRouter } from 'react-router-dom';
// import logo from './logo.svg';
// import { Counter } from './modules/counter/Counter';
import './App.css';
import RoutesComponent from './app/Routes.Component';
import { Grommet, Box } from 'grommet'; 
import customTheme from './app/theme';

function App() {
    return (
        <Grommet full theme={customTheme}>
            <Box
                className="s-cover-app"
                background="transparent"
                overflow="auto"
                color="primary"
            >
                <BrowserRouter basename="/sensolert">
                    <RoutesComponent  />
                </BrowserRouter>
            </Box>
        </Grommet>
    );
}

export default App;
