import React from 'react';
import MainContainer from './containers/MainContainer'
import { Routes, Route } from 'react-router-dom';
// import Trends from './containers/Trends';
import CarsInfo from './containers/CarsInfo';
import SignIn from './Components/SignIn';
import { Favorite } from '@mui/icons-material';
import Favorites from './Components/Favorites'

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
            <Route
                path='/favorites'
                element={<Favorites/>}
            />
        </Routes>
    </div>
);

export default App;