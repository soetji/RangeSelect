// import { always, clone, compose, map, update } from 'ramda';
// import { fill } from 'lodash';

const toggle = (idx, values) =>
    R.update(idx, !values[idx], values);

const focusSetNot = (idx, val, values) => R.compose(
    R.update(idx, !val),
    R.map(R.always(val))
)(values);

const focusToggle = (idx, values) => 
    focusSetNot(idx, values[idx], values);

const rangeSet = (idx, prevIdx, toVal, values) => {
    let start, end;
    if (prevIdx < idx) {
        start = prevIdx;
        end = idx + 1;
    } else {
        start = idx;
        end = prevIdx + 1;
    }
    return _.fill(R.clone(values), toVal, start, end);
};

const util = {
    toggle,
    focusToggle,
    rangeSet
}