class BankAccount {
  #accountNumber = "";
  #balance = 0;
  #accountHolderName = "";

  constructor(accountNumber, balance, accountHolderName) {
    this.#accountNumber = accountNumber;
    this.#balance = balance;
    this.#accountHolderName = accountHolderName;
  }

  deposit(amount) {
    this.#balance += amount;
  }

  get balance() {
    return this.#balance;
  }

  withdraw(amount) {
    if (this.#balance - amount < 0) {
      console.log("Withdrawal failed. Balance cannot go below zero.");
      return;
    }

    this.#balance -= amount;
  }
}

class CheckingAccount extends BankAccount {
  constructor(accountNumber, balance, accountHolderName) {
    super(accountNumber, balance, accountHolderName);
  }
}

class SavingsAccount extends BankAccount {
  constructor(accountNumber, balance, accountHolderName) {
    super(accountNumber, balance, accountHolderName);
  }
}

const checkingAccount = new CheckingAccount("1234567890", 1000, "John Doe");
const savingsAccount = new SavingsAccount("9876543210", 500, "Jane Doe");

checkingAccount.deposit(500);
console.log("Checking account balance: " + checkingAccount.balance);

savingsAccount.deposit(100);
console.log("Savings account balance: " + savingsAccount.balance);

savingsAccount.withdraw(600);
console.log("Savings account balance: " + savingsAccount.balance);
