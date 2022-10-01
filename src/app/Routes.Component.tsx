import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LoginComponent from '../modules/authorization/Login.Component';
import DashboardComponent from '../modules/dashboard/Dashboard.Component';
import LayoutDefaultContainer from './layouts/LayoutDefault.Container';

const RoutesComponent = () => {
    return (
        <Routes basename="/sensolert">
            <Route path="/" element={<LayoutDefaultContainer />}>
                <Route path="login" element={<LoginComponent />} />
                <Route path="dashboard" element={<DashboardComponent />} />
            </Route>
        </Routes>
    );
};

export default RoutesComponent;
