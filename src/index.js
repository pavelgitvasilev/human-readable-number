module.exports = function toReadable (number) {
  const base = {
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
    100: "one hundred"
};

let flagHundred,
    strNum = number + '',
    str;

if (base[number]) {
    return base[number];
}
if (strNum < 100) {
    return `${base[strNum[0] * 10]} ${base[strNum[1]]}`;
}

strNum.length === 3 ? flagHundred = true : flagHundred = false;

if (flagHundred) {
    str = base[strNum[0]] + ' hundred';
    strNum = strNum.slice(1);

    if (strNum <= 20) {
        if (strNum == '00') {
            return `${str}`;
        }
        if (strNum[0] === "0") {
            strNum = strNum.slice(1);
        }
        return `${str} ${base[strNum]}`;
    }

    if (strNum > 20) {
        if (strNum[1] == "0") {
            return `${str} ${base[strNum]}`;
        }
        return `${str} ${base[strNum[0] * 10]} ${base[strNum[1]]}`;
    }
}
}
