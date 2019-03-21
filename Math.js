const _ = require('lodash');

function add(x, y) {
    if (_.isNumber(x) && _.isNumber(y)) {

        console.log('addition = ' + (x + y));
        return x + y;

    } else {
        console.log('Error, les valeurs ne sont pas des nombres ');
        return null;
    }
}

function sous(x, y) {
    if (_.isNumber(x) && _.isNumber(y)) {
        console.log('soustraction = ' + (x - y));
        return x - y;
    } else {
        console.log('Error, les valeurs ne sont pas des nombres ');
        return null;
    }
}

function multi(x, y) {
    if (_.isNumber(x) && _.isNumber(y)) {

        console.log('multiplication= ' + (x * y));
        return x * y;
    } else {
        console.log('Error, les valeurs ne sont pas des nombres ');
        return null;
    }
}

function div(x, y) {
    if (_.isNumber(x) && _.isNumber(y)) {

        console.log('division = ' + (x / y));
        return x / y;
    } else {
        console.log('Error, les valeurs ne sont pas des nombres ');
        return null;
    }
}


module.exports = {

    add: add,
    sous: sous,
    multi: multi,
    div: div
}