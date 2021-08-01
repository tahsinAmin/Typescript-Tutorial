import { Invoice } from './classes/Invoice.js';
import { Payment } from './classes/Payment.js';
import { ListTemplate } from './classes/ListTemplate.js';
import { HasFormatter } from './interfaces/HasFormatter.js';

const form = document.querySelector('.new-item-form') as HTMLFormElement;
console.log(form.children);

// inputs
const type = document.querySelector('#type') as HTMLInputElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

// list template instance
const ul = document.querySelector('ul')!;
const list = new ListTemplate(ul);

form.addEventListener('submit', (e: Event) => {
  e.preventDefault();

let values:[string, string, number];
values = [tofrom.value, details.value, amount.valueAsNumber];

  let doc: HasFormatter;
  if (type.value === 'invoice') {
    doc = new Invoice(...values);
  } else {
    doc = new Payment(...values);
  }
  
  list.render(doc, type.value, 'end');
});



// // GENERICS

// const addUID = <T extends {name:string}>(obj: T) => {
//   let uid = Math.floor(Math.random() * 100);
//   return {...obj, uid};
// }


enum ResourceType { BOOK, AUTHOR, FILM, DIRECTOR, PERSON }

// interface defines how an object should look
interface Resource<T> {
  uid: number;
  resourceType: ResourceType;
  data: T;
}

const docOne: Resource<object> = {
  uid:1,
  resourceType: ResourceType.BOOK,
  data:{title: 'nam of the wind'}
}

const docTwo: Resource<object> = {
  uid:10,
  resourceType: ResourceType.PERSON,
  data:{name: 'Yoshi'}
}

console.log(docOne, docTwo);

// Tuples = thje types of data in each position in a tuple is fixed once it's intialised
let arr = ['ryu', 25, true]
arr[0] = false;
arr[1] = 'yoshi';
arr = [30, false, 'yoshi']

let tup: [string, number, boolean] = ['ryu', 25, false];
tup[0] = 'ken'
tup[1] = 24

// let student: [string,number]
// student = [2342,'asd']
// student = ['josh', 345]