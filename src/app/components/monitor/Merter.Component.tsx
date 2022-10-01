import React, { memo, useEffect, useRef } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './meter.scss';
import Meter from './meter';
import { Box } from 'grommet';
const style = {
    width: '300px',
    height: '220px',
    canvas: {
        width: '95%',
    },
};

var opts = {
    angle: 0.002, // The span of the gauge arc
    lineWidth: 0.34, // The line thickness
    radiusScale: 1, // Relative radius
    pointer: {
        length: 0.6, // // Relative to gauge radius
        strokeWidth: 0.055, // The thickness
        color: '#eee796', // Fill color
    },
    limitMax: false, // If false, max value increases automatically if value > maxValue
    limitMin: false, // If true, the min value of the gauge will be fixed
    colorStart: '#5FDA46', // Colors
    colorStop: '#ff0000', // just experiment with them
    strokeColor: '#fff', // to see which ones work best for you
    generateGradient: true,
    highDpiSupport: true, // High resolution support
    staticZones: [
        { strokeStyle: '#5FDA46', min: -2, max: 24 }, // GREEN
        { strokeStyle: '#E2AC00', min: 24, max: 30 }, // Yellow
        { strokeStyle: '#ff0000', min: 30, max: 1000 }, // RED
    ],
    staticLabels: {
        font: '8px sans-serif', // Specifies font
        labels: [0, 24.4, 30, 50, 70, 100, 600, 1000], // Print labels at these values
        color: '#EFEFEF', // Optional: Label text color
        fractionDigits: 0, // Optional: Numerical precision. 0=round off.
    },
};
const MeterComponent = (props: any) => {
    const { canvas } = style;
    const { getMeterObj, sensor } = props;
    var meter: any = useRef(uuidv4());
    //console.log('Getmeter Obj', getMeterObj);

    useEffect(() => {
        const meterObj = Meter();
        const targetDom: any = meter.current;
        if (targetDom && !targetDom.id) {
            if (sensor === 'PRESSURE') {
                const staticZonesLoad: {} = {
                    staticZones: [
                        { strokeStyle: '#5FDA46', min: -2, max: 500 }, // GREEN
                        { strokeStyle: '#E2AC00', min: 500, max: 800 }, // Yellow
                        { strokeStyle: '#ff0000', min: 800, max: 1000 }, // RED
                    ],
                };
                const staticLabelsLoad = {
                    staticLabels: {
                        font: '8px sans-serif', // Specifies font
                        labels: [0, 200, 300, 500, 700, 800, 1000], // Print labels at these values
                        color: '#EFEFEF', // Optional: Label text color
                        fractionDigits: 0, // Optional: Numerical precision. 0=round off.
                    },
                };
                opts = { ...opts, ...staticZonesLoad, ...staticLabelsLoad };
            } else {
                const tempOpts = {
                    staticZones: [
                        { strokeStyle: '#5FDA46', min: -2, max: 24 }, // GREEN
                        { strokeStyle: '#E2AC00', min: 24, max: 30 }, // Yellow
                        { strokeStyle: '#ff0000', min: 30, max: 1000 }, // RED
                    ],
                    staticLabels: {
                        font: '8px sans-serif', // Specifies font
                        labels: [0, 24.4, 30, 50, 70, 100, 600, 1000], // Print labels at these values
                        color: '#EFEFEF', // Optional: Label text color
                        fractionDigits: 0, // Optional: Numerical precision. 0=round off.
                    },
                };

                opts = { ...opts, ...tempOpts };
            }
            const _meterObj = meterObj
                .initMeter(targetDom, sensor)
                .setOptions(opts);
            getMeterObj(_meterObj);
            targetDom.setAttribute('id', `${sensor}`);
        }
    }, []);

    return (
        <Box style={style}>
            <canvas ref={meter} style={canvas}></canvas>
        </Box>
    );
};

export default memo(MeterComponent);
