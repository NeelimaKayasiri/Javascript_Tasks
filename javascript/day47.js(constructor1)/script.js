class Bank {

    static bank_Name = "Canara Bank";
    static branch = "Guntur";

    constructor(acc_no, acc_holder, balance, account_type, age) {
        this.acc_no = acc_no;
        this.acc_holder = acc_holder;
        this.balance = balance;
        this.account_type = account_type;
        this.age = age;
    }

    displayDetails() {
        console.log("Bank Name :", Bank.bank_Name);
        console.log("Branch :", Bank.branch);
        console.log("Account Number :", this.acc_no);
        console.log("Account Holder :", this.acc_holder);
        console.log("Balance :", this.balance);
        console.log("Age :", this.age);
    }
}

let account1 = new Bank(101, "Neelima", 50000, 21);
let account2 = new Bank(102, "Janaki", 75000, 22);
let account3 = new Bank(103, "Anantha", 45000, 23);


console.log("-------- Account 1 ----------");
account1.displayDetails();

console.log("\n-------- Account 2 ----------");
account2.displayDetails();

console.log("\n-------- Account 3 ----------");
account3.displayDetails();