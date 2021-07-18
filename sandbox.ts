// explicit types
let character: string;
let age: number;
let isLoading: boolean;

// age = 'luigi';
age = 33;

isLoading = true;

// arrays
let ninjas : string[];
ninjas = ['ww','re']
// ninjas.push('asd')

let kinjas : string[] = [];
kinjas.push('de')

console.log(kinjas);

//union types
let mixed : (string | number)[] = [];
mixed.push(2);
mixed.push('dsf');
// mixed.push(true)


let uid: string|number;
uid = '123';
uid = 123;
// uid=true

//object
let ninjaTwo: {
  name:string,
  age: number,
  beltColor: string
}

ninjaTwo = {name:"Yoshi", age:23, beltColor:'red'};

