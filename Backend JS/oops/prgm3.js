class Bank {
    // properties
    accountDetails = {
        1000: { accno: 1000, username: 'userone', password: 'userone', balance: 5000 },
        1001: { accno: 1001, username: 'usertwo', password: 'usertwo', balance: 1000 },
        1002: { accno: 1002, username: 'userthree', password: 'userthree', balance: 10000 },
        1003: { accno: 1003, username: 'userfour', password: 'userfour', balance: 2000 },
    }
    // write a method to validate the account number
    validateAcc(accno) {
        return accno in this.accountDetails ? true : false;
    }

    // write a method to authenticate the account details
    authUser(accno, pss) {
        if (this.validateAcc(accno)) {
            if (this.accountDetails[accno].password == pss) {
                console.log('authentication successfull');

            }
            else {
                console.log('invalid credentials');

            }
        }
        else {
            console.log('invalid credentials');

        }
    }

    // write a method to have a balance enquiry

    balanceEqry(accno, pass) {
        if (this.validateAcc(accno)) {
            if (this.accountDetails[accno].password == pass) {
                console.log(`current balance : ${this.accountDetails[accno].balance}`);
            }
            else {
                console.log('invalid credentials');

            }
        }
        else {
            console.log('invalid credentials');

        }

    }
    // write a method to transfer fund
    transferFund(fromAccno, pass, toAccno, amount) {
        if (this.validateAcc(fromAccno) && this.validateAcc(toAccno)) {
            if (this.accountDetails[fromAccno].password == pass) {
                if (this.accountDetails[fromAccno].balance >= amount) {
                    console.log(`balance of ${fromAccno} before transfer: ${this.accountDetails[fromAccno].balance}`);
                    console.log(`balance of ${toAccno} before transfer: ${this.accountDetails[toAccno].balance}`);
                    this.accountDetails[fromAccno].balance -= amount
                    this.accountDetails[toAccno].balance += amount
                    console.log(`balance of ${fromAccno} after transfer: ${this.accountDetails[fromAccno].balance}`);
                    console.log(`balance of ${toAccno} after transfer: ${this.accountDetails[toAccno].balance}`);

                }
                else {
                    console.log('insufficient balance');

                }
            }

        }
        else {
            console.log('invalid account details');

        }

    }
}

const a1 = new Bank();
console.log(a1.validateAcc(1003) ? `Valid accno` : `invalid accno`);
a1.authUser(1002, 'userthr')
a1.balanceEqry(1002, 'userthree')
a1.transferFund(1001, 'usertwo', 1003, 500);