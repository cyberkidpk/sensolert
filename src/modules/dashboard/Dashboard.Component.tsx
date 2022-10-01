import React from 'react';
import { Box } from 'grommet';
import MonitorWrapperContainer from '../../app/components/monitor/Monitor.Wrapper.Container';
import MonitorPressureWrapperContainer from '../../app/components/monitor/Monitor.Pressure.Wrapper.Container';
// import { authMessageAsync, authMessageStatus } from './authSlice';
// import { useAppSelector, useAppDispatch } from '../../app/hooks';
// import { Navigate } from 'react-router-dom';

const DashboardComponent = () => {
    // const [valid, setValid] = useState(false);
    // const authStatusParam = useAppSelector(authMessageStatus);
    // const dispatch = useAppDispatch();

    return (
        <Box direction="row">
            <Box direction="row" style={{ flexWrap: 'wrap' }}>
                <MonitorWrapperContainer />
                <MonitorPressureWrapperContainer />
            </Box>
        </Box>
    );
};

export default DashboardComponent;
