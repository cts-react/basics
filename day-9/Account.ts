class Account{
    constructor(amount:number, openningDate){
        this.amount= amount;
        this.openingDate = openningDate;
    }
    amount:number = 0;
    name:string;
    openingDate:Date;
}

const account1 :Account = new Account(100, new Date());

console.log(account1.amount);
console.log(account1.openingDate);


