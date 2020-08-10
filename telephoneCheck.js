function telephoneCheck(str) {

    // let regex = /^1\s\d{3}\s\d{3}\s\d{4}$|^1?\(\d{3}\)\d{3}-\d{4}$|^\d{10}$|^(1\s)*(\d{3})-\d{3}-(\d{4})$|^\d{3}\s\d{3}\s\d{4}$|^(1\s)\(\d{3}\)\s\d{3}-\d{4}$/;
    // let regex = /^1?\(\d{3}\)\d{3}-\d{4}$|^\d{10}$|^(1\s)*(\d{3})-\d{3}-(\d{4})$|^(1\s)*\d{3}\s\d{3}\s\d{4}$|^(1\s)\(\d{3}\)\s\d{3}-\d{4}$/;
    // let regex = /^(1\s)*(\d{3})-\d{3}-(\d{4})$|^(1\s)*\d{3}\s*\d{3}\s*\d{4}$|^1?(1\s)*\(\d{3}\)\s*\d{3}-\d{4}$/;
    let regex = /^(1\s)*(\d{3})\s*-*\d{3}\s*-*(\d{4})$|^1?(1\s)*\(\d{3}\)\s*\d{3}-\d{4}$/;
    
    return regex.test(str);
  }
  
  console.log(telephoneCheck("555-555-5555"));
  console.log(telephoneCheck("2(757)622-7382"));
  