function palindrome(str) {

    let strLowerCase = str.toLowerCase();
    let regex = /[a-z0-9]/g; // Change this line
    let strAdjusted = strLowerCase.match(regex);

    let len = strAdjusted.length;

    console.log(strAdjusted);

    for(let i = 0; i < len; i++) {
        if (strAdjusted[i] != strAdjusted[len-1-i]) {
            return false;
        }
    }

    return true;
  }


console.log(palindrome("A man, a plan, a canal. Panama"));
