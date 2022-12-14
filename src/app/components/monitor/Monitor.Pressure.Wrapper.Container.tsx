import React, { useCallback, useEffect, useState } from 'react';
import { Box, Card, CardBody, CardHeader, CardFooter, Text } from 'grommet';
import Utils from '../../utils';
import MeterComponent from './Merter.Component';
// import { authMessageAsync, authMessageStatus } from './authSlice';
// import { useAppSelector, useAppDispatch } from '../../app/hooks';
// import { Navigate } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '../../hooks';
import {
    incrementAsync,
    selectCount,
} from '../../../../src/modules/counter/counterSlice';
const enum Enum {
    ALERT = 'alertStatus',
    THRESHHOLD = 'reachingAlertStatus',
    OK = 'okStatus',
}
const randomNumber: number[] = [
    10, 59, 15, 90, 18, 100, 2, 5, 10, 35, 200, 500, 40, 800, 600, 700, 70, 90,
    100,
];
const breakpoints: number[] = [500, 800, 1000];

const MonitorPressureWrapperContainer = () => {
    const sensorData = useAppSelector(selectCount) | 0;
    const dispatch = useAppDispatch();
    const [meterObj, setMeterObj]: any = useState(null);
    // const [valid, setValid] = useState(false);
    // const authStatusParam = useAppSelector(authMessageStatus);
    // const dispatch = useAppDispatch();
    const _applyCSSClass = (param: string): string => {
        var classToApply: string = '';
        switch (param) {
            case 'ALERT':
                let a = Enum['ALERT'];
                classToApply = `half24Mar ${a}`;
                break;
            case 'THRESHHOLD':
                let t = Enum['THRESHHOLD'];
                classToApply = `half24Mar ${t}`;
                break;
            case 'OK':
                let o = Enum['OK'];
                classToApply = `half24Mar ${o}`;
                break;
        }
        return classToApply;
    };

    const _applyAlertColorLogicToComponent = (count: number) => {
        let targetCssClass;
        if (count <= breakpoints[0]) {
            targetCssClass = _applyCSSClass('OK');
        } else if (count > breakpoints[0] && count <= breakpoints[1]) {
            targetCssClass = _applyCSSClass('THRESHHOLD');
        } else {
            targetCssClass = _applyCSSClass('ALERT');
        }

        return targetCssClass;
    };
    const _getMeterObj: any = useCallback(
        (meterObj: object) => {
            console.log(meterObj);
            setMeterObj(meterObj);
        },
        [meterObj],
    );

    const _setMaxValue = (maxValue: number = 1000) => {
        if (meterObj) {
            let _meterObjLocal = meterObj;
            // meterObj.setOptions(opts);
            // meterObj.setMaxValue(maxValue);
            _meterObjLocal.maxValue = maxValue; // set max gauge value
            _meterObjLocal.setMinValue(10); // Prefer setter over gauge.minValue = 0
            _meterObjLocal.animationSpeed = 50; // set animation speed (32 is default value)
        }
    };
    const _setMeter = (count: number) => {
        if (meterObj) {
            meterObj.maxValue = 1000; // set max gauge value
            meterObj.setMinValue(10);
            meterObj.set(count); // set actual value
        }
    };

    const _getDataFromTheStream = () => {
        setInterval(() => {
            let _sensorData: number | undefined =
                Utils.randomNumberFromArray(randomNumber);
            console.log(_sensorData);
            if (_sensorData) dispatch(incrementAsync(_sensorData));
        }, 3000);
    };
    useEffect(() => {
        _setMaxValue(1000);
        _getDataFromTheStream();
    }, []);

    useEffect(() => {
        _setMeter(sensorData);
    }, [sensorData]);

    return (
        <Box>
            <Card
                pad="small"
                className={_applyAlertColorLogicToComponent(sensorData)}
            >
                <CardHeader
                    align="center"
                    style={{ justifyContent: 'center', alignItems: 'center' }}
                >
                    <Text size="large">{sensorData}</Text>
                </CardHeader>
                <CardBody
                    style={{ justifyContent: 'center', alignItems: 'center' }}
                >
                    <MeterComponent
                        getMeterObj={_getMeterObj}
                        sensor="PRESSURE"
                    />
                </CardBody>
                <CardFooter
                    style={{ justifyContent: 'center', alignItems: 'center' }}
                >
                    <Text size="large">PRESSURE ALERT</Text>
                </CardFooter>
            </Card>
        </Box>
    );
};

export default MonitorPressureWrapperContainer;
