const sumAll = function (min, max) {
    //     if (a == b) return a;
    //     else if (a < b) return a + sumAll(a + 1, b);
    //     else console.log(a + sumAll(a - 1, b));
    // };

    let sum = 0;
    for (let i = min; i <= max; i++) {
        sum += i;
    }
    return sum;
}

// Do not edit below this line
module.exports = sumAll;
