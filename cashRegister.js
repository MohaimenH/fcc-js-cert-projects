function checkCashRegister(price, cash, cid) {
    var change = cash - price;
    let result = {status: 0, change: 0};
    let sum = 0;
    cid.map(list => sum += list[1]);
    
    // console.log(change);
    // console.log(sum);

    let money = [...cid];

    // money[0].push(0.01);
    // money[1].push(0.05);
    // money[2].push(0.10);
    // money[3].push(0.25);
    // money[4].push(1.00);
    // money[5].push(5.00);
    // money[6].push(10.0);
    // money[7].push(20.0);
    // money[8].push(100.0);

    // console.log(money);

    let newArr = [];
    
    if (sum == change) {
        result.status = "CLOSED";
        result.change = cid;
    }

    else if (sum < change || canBeDivided(money, change, newArr) == false) {
        // console.log(newArr);
        result.status = "INSUFFICIENT_FUNDS";
        result.change = [];
    }

    else {
        result.status = "OPEN";
        result.change = newArr;
    }

    return result;
  }

  function canBeDivided(money, change, newArr) {
    
    if (change >= 100 && money[8][1]) {
        let i = 0;
        for (i = 0; change >= 100 && money[8][1] > 0; i++) {
            change = change - 100;
            money[8][1] -= 100;
        }
        newArr.push(["ONE HUNDRED", 100 * i]);
    }

    if (change >= 20 && money[7][1] > 0) {
        let i = 0;
        for (i = 0; change >= 20 && money[7][1] > 0; i++) {
            change = change - 20;
            money[7][1] -= 20;
        }
        newArr.push(["TWENTY", 20 * i]);
    }

    if (change >= 10 && money[6][1] > 0) {
        let i = 0;
        for (i = 0; change >= 10 && money[6][1] > 0; i++) {
            change = change - 10;
            money[6][1] -= 10;
        }
        newArr.push(["TEN", 10 * i]);
    }

    if (change >= 5 && money[5][1] > 0) {
        let i = 0;
        for (i = 0; change >= 5 && money[5][1] > 0; i++) {
            change = change - 5;
            money[5][1] -= 5;
        }
        newArr.push(["FIVE", 5 * i]);
    }

    if (change >= 1 && money[4][1] > 0) {
        let i = 0;
        for (i = 0; change >= 1 && money[4][1] > 0; i++) {
            change = change - 1;
            money[4][1] -= 1;
        }
        newArr.push(["ONE", 1 * i]);
    }

    if (change >= 0.25 && money[3][1] > 0) {
        // console.log(money[3]);
        let i = 0;
        for (i = 0; change >= 0.25 && money[3][1] > 0; i++) {
            change = change - 0.25;
            money[3][1] -= 0.25;
        }
        newArr.push(["QUARTER", 0.25 * i]);
    }

    if (change >= 0.1 && money[2][1] > 0) {
        let i = 0;
        for (i = 0; change >= 0.1 && money[2][1] > 0; i++) {
            change = change - 0.1;
            money[2][1] -= 0.1;
        }
        newArr.push(["DIME", 0.1 * i]);
    }

    if (change >= 0.05 && money[1][1] > 0) {
        let i = 0;
        for (i = 0; change >= 0.05 && money[1][1] > 0; i++) {
            change = change - 0.05;
            money[1][1] -= 0.05;
        }
        newArr.push(["NICKEL", 0.05 * i]);
    }

    if (change >= 0.01 && money[0][1] > 0) {
        let i = 0;
        for (i = 0; change >= 0.01 && money[0][1] > 0; i++) {
            change = change - 0.01;
            money[0][1] -= 0.01;
        }

        if (change > 0.009 && change < 0.01) {
            i++;
            change = 0;
        }

        newArr.push(["PENNY", 0.01 * i]);
    }


    // change = Math.round(change);
    // console.log(change);
    return change == 0;

  }
  
console.log(checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));
console.log(checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));
console.log(checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));