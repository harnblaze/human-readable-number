module.exports = function toReadable(number) {
    const humanNumbers = {
        0: "zero",
        1: "one",
        2: "two",
        3: "three",
        4: "four",
        5: "five",
        6: "six",
        7: "seven",
        8: "eight",
        9: "nine",
        10: "ten",
        11: "eleven",
        12: "twelve",
        13: "thirteen",
        14: "fourteen",
        15: "fifteen",
        16: "sixteen",
        17: "seventeen",
        18: "eighteen",
        19: "nineteen",
        20: "twenty",
        30: "thirty",
        40: "forty",
        50: "fifty",
        60: "sixty",
        70: "seventy",
        80: "eighty",
        90: "ninety",
    };

    function aboveHundred(number) {
        if (number < 20) {
            return humanNumbers[number];
        } else if (number < 100) {
            const tens = parseInt(number / 10) * 10;
            const rest = number % 10;
            if (rest === 0) {
                return humanNumbers[tens];
            } else {
                return `${humanNumbers[tens]} ${humanNumbers[rest]}`;
            }
        }
    }

    if (number < 100) {
        return aboveHundred(number);
    } else {
        const hundreds = parseInt(number / 100);
        const rest = number % 100;
        if (rest === 0) {
            return `${humanNumbers[hundreds]} hundred`;
        } else {
            return `${humanNumbers[hundreds]} hundred ${aboveHundred(rest)}`;
        }
    }
};
