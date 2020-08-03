function convertToRoman(num) {
  let thousands = 0;
  let hundreds = 0;
  let tens = 0;
  let ones = 0;

  let i = 0;

  let result = "";

  if (num >= 1000) {
    thousands = Math.floor(num / 1000);
    for (i = 0; i < thousands; i++) result += "M";

    num -= thousands * 1000;
  }

  if (num >= 900) {
    result += "CM";

    num -= 900;
  }

  if (num >= 500) {
    result += "D";

    num -= 500;
  }

  if (num >= 400) {
    result += "CD";

    num -= 400;
  }

  if (num >= 100) {
    hundreds = Math.floor(num / 100);
    for (i = 0; i < hundreds; i++) result += "C";

    num -= hundreds * 100;
  }

  if (num >= 90) {
    result += "XC";

    num -= 90;
  }

  if (num >= 50) {
    result += "L";

    num -= 50;
  }

  if (num >= 40) {
    result += "XL";

    num -= 40;
  }

  if (num >= 10) {
    tens = Math.floor(num / 10);
    for (i = 0; i < tens; i++) result += "X";

    num -= tens * 10;
  }

  if (num >= 9) {
    result += "IX";

    num -= 9;
  }

  if (num >= 5) {
    result += "V";

    num -= 5;
  }

  if (num >= 4) {
    result += "IV";

    num -= 4;
  }

  if (num >= 1) {
    ones = Math.floor(num);
    for (i = 0; i < ones; i++) result += "I";

    num -= ones;
  }

  return result;
}

console.log(convertToRoman(1984));
