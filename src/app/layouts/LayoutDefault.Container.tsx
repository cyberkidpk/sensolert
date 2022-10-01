import React from 'react';
import { Box, Image } from 'grommet';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import './layout.scss';
import slogo from '../../assets/images/sensolert-logo-right.png';

const LayoutDefaultContainer = () => {
    const { pathname } = useLocation();
    return (
        <>
            {pathname === '/' ? <Navigate to="login" /> : ''}
            <Box
                direction="row"
                align="center"
                style={{ width: '100%', minHeight: '100px' }}
                className="logo-line"
            >
                <Image src={slogo} width="230" />
            </Box>
            <Box className="outlet-wrapper">
                <Outlet />
            </Box>
        </>
    );
};

export default LayoutDefaultContainer;
