import React from 'react';
import MainContainer from './containers/MainContainer'
import { Routes, Route } from 'react-router-dom';
// import Trends from './containers/Trends';
import CarsInfo from './containers/CarsInfo';
import SignIn from './Components/SignIn';

const App = () => (
    <div id='app'>
        <MainContainer />
        <Routes>
            <Route
                path="/"
                element={<SignIn />}
            />
            <Route
                exact path="/home"
                element={<CarsInfo/>}
            />
        </Routes>
    </div>
);

export default App;