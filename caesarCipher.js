function rot13(str) {

    let len = str.length;
    let result = str.slice(0);
  
    let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  
    result = result.split('');
    // console.log(result);
  
    result = result.map(function(letters) {
      // console.log(letters);
  
      if(alphabet.indexOf(letters) != -1) {
  
        let index = alphabet.indexOf(letters);
  
        // console.log(index);
  
        if (index <= 12) {
          // console.log("I ran!!");
          let temp = 12-index;
          letters = alphabet[25-temp];
        }
  
        else {
          // console.log("I ran!");
          letters = alphabet[index-13];
        }
      }
  
      return letters;
  
    });
  
    result = result.join("");
    return result;
  }
  
  console.log(rot13("SERR CVMMN!"));
  