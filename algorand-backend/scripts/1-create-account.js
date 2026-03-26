import algosdk from "algosdk";

// creates new account and saves it
const myaccount = algosdk.generateAccount();

//prints the value for easy access
console.log("Account created. Save address & Mnemonic!");
console.log("Account Address = " + myaccount.addr);

let account_mnemonic = algosdk.secretKeyToMnemonic(myaccount.sk);
console.log("Account Mnemonic = " + account_mnemonic); 