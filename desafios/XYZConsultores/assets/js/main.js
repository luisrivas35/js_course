import { Client } from "./client.js";
import { Tax } from "./tax.js";

const tax1 = new Tax(50000, 10000);
const tax2 = new Tax(175000, 23000);
const tax3 = new Tax(753000, 12000);
const tax4 = new Tax(45000, 1000);
const tax5 = new Tax(76000, 11000);
const tax6 = new Tax(215000, 16000);

const client1 = new Client("Johny", tax1);
const client2 = new Client("Juanita", tax2);
const client3 = new Client("Pedrito", tax3);
const client4 = new Client("Marie", tax4);
const client5 = new Client("Joseph", tax5);
const client6 = new Client("Siriaco", tax6);

const taxAmountClient1 = client1.calculateTax();
const taxAmountClient2 = client2.calculateTax();
const taxAmountClient3 = client3.calculateTax();
const taxAmountClient4 = client4.calculateTax();
const taxAmountClient5 = client5.calculateTax();
const taxAmountClient6 = client6.calculateTax();

console.log(`Tax for ${client1.clientName}: ${taxAmountClient1}`);
console.log(`Tax for ${client2.clientName}: ${taxAmountClient2}`);
console.log(`Tax for ${client3.clientName}: ${taxAmountClient3}`);
console.log(`Tax for ${client4.clientName}: ${taxAmountClient4}`);
console.log(`Tax for ${client5.clientName}: ${taxAmountClient5}`);
console.log(`Tax for ${client6.clientName}: ${taxAmountClient6}`);
