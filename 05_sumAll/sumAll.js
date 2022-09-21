const sumAll = function (a, b) {
    if (a == b) return a;
    else if (a < b) return a + sumAll(a + 1, b);
    else console.log(a + sumAll(a - 1, b));
};


// Do not edit below this line
module.exports = sumAll;
