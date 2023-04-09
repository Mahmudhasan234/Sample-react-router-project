import React from 'react';
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';

const MainJhankar = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default MainJhankar;