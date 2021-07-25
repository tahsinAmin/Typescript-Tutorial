"use strict";
// // ----------TypeScript Tutorial #11 - DOM & Typecasting----------
// // When you give ! at the end, then you're sure that there's an element
// const anchor = document.querySelector('a')!;
// // if(anchor){
// //   console.log(anchor.href);
// // }
// console.log(anchor.href);
// // What if there's another form?
// // const form = document.querySelector('form')!;
// // Cast it to HTMLFormElement
// const form = document.querySelector('.new-item-form') as HTMLFormElement;
// console.log(form.element);
// // inputs
// const type = document.querySelector('#type') as HTMLSelectElement;
// const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
// const details = document.querySelector('#details') as HTMLInputElement;
// const amount = document.querySelector('#amount') as HTMLInputElement;
// form.addEventListener('submit', (e:Event) => {
//   e.preventDefault();
//   console.log(
//     type.value,
//     tofrom.value,
//     details.value,
//     amount.valueAsNumber
//   );
// });
// // ----------TypeScript Tutorial #12 - Classes---------
// // classes
// class Invoice {
//   client: string;
//   details: string;
//   amount: number;
//   constructor(c:string, d: string, a:number){
//     this.client=c;
//     this.details=d;
//     this.amount=a;
//   }
//   format(){
//     return `${this.client} owes $${this.amount} for ${this.details}`
//   }
// }
// const invOne = new Invoice('Mario','work on the Mario website',250);
// const invTwo = new Invoice('Luigi','work on the Mario website',300);
// const invoices: Invoice[] = [];
// invoices.push(invOne);
// invoices.push(invTwo);
// console.log(invoices);
// const form = document.querySelector('.new-item-form') as HTMLFormElement;
// console.log(form.element);
// // inputs
// const type = document.querySelector('#type') as HTMLSelectElement;
// const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
// const details = document.querySelector('#details') as HTMLInputElement;
// const amount = document.querySelector('#amount') as HTMLInputElement;
// form.addEventListener('submit', (e:Event) => {
//   e.preventDefault();
//   console.log(
//     type.value,
//     tofrom.value,
//     details.value,
//     amount.valueAsNumber
//   );
// });
// ----------TypeScript Tutorial #13 - Public, Private & Readonly---------
// classes
var Invoice = /** @class */ (function () {
    // readonly client: string;
    // private details: string;
    // public amount: number;
    function Invoice(// if use this way then we have to give the access modifiers
    client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    Invoice.prototype.format = function () {
        return this.client + " owes \u00A3" + this.amount + " for " + this.details;
    };
    return Invoice;
}());
var invOne = new Invoice('mario', 'work on the mario website', 250);
var invTwo = new Invoice('luigi', 'work on the luigi website', 300);
var invoices = [];
invoices.push(invOne);
invoices.push(invTwo);
invoices.forEach(function (inv) {
    console.log(inv.client, inv.amount, inv.format());
});
var form = document.querySelector('.new-item-form');
console.log(form.children);
// inputs
var type = document.querySelector('#type');
var tofrom = document.querySelector('#tofrom');
var details = document.querySelector('#details');
var amount = document.querySelector('#amount');
form.addEventListener('submit', function (e) {
    e.preventDefault();
    console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
