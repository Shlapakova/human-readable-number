module.exports = function toReadable(number) {
  const numbersToWords = {
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
    90: "ninety"
  };
  const tens = Math.floor((number %100) / 10) * 10
  const digitPart = number % 10;
  function getNumber(number) {
   const key = Object.keys(numbersToWords).find(num =>Number(num) == number);
   return numbersToWords[key];
   }
if ( number <= 20 || (20 < number && number < 100 && number%10 === 0)) {
  return getNumber(number);
}
if (20 < number && number < 100) {
  return getNumber(tens) + ' ' + getNumber(digitPart);
}
if (100 <= number && number < 1000 && number % 100 === 0) {
return getNumber(Math.floor(number / 100)) + ' hundred';
}
if (100 <= number && number < 1000 && number % 10 === 0) {
  return getNumber(Math.floor(number / 100)) + ' hundred ' + getNumber(tens);
  }
  if (100 < number && number < 1000 ) {
    if ( number % 100 >= 10 && number % 100 <= 20){
      return getNumber(Math.floor(number / 100)) + ' hundred ' + getNumber(number % 100);
    }
    if ( number % 100 >= 20) {
    return getNumber(Math.floor(number / 100)) + ' hundred ' + getNumber(tens) +' ' + getNumber(digitPart);
  }
else {
    return getNumber(Math.floor(number / 100)) + ' hundred ' + getNumber(digitPart);
}
    }
  }