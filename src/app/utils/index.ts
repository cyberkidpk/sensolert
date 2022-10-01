import _ from 'lodash';

const Utils = {
    randomNumberFromArray: (arr: number[]) => {
        let tarElem = _.sample(arr);
        return tarElem;
    },
};

export default Utils;
