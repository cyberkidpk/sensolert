export default function Meter() {
    var initMeter = (targetDom, sensor) => {
        // your canvas element
        var target = targetDom;
        var gauge;

        gauge = new Gauge(target); // eslint-disable-line

        return gauge;
    };
    return {
        initMeter,
    };
}
