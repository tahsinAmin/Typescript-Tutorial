Tyescript allows us to type check during the development library whihc leads to cleaner code and less errors in the browser.

1. For translating ts to js:
   ->npx tsc fileName.ts

2. Typescript uses strict types where Javascript does not.
   ->For example:
   let character = 'Mario';
   character = 29; // This will thow an error!
   character = 'Gonzalves'; // Will not throw an error

3. Whenever we make an error, it's not going to compile from Typescript to javascript

4. If we declare a variable as once type, then we can only update as one type in it.
   for example:
   let numbers = [10,20,30,40];
   numbers.push(45);
   // numbers.push('sas');

   let mixed = ['ken', 4, 'tahs'];
   mixed.push(87);
   mixed.push('asd')
   mixed[0] = 3;
   mixed[1] = 'asjh';

5. We cannot make a variable that stores an object be latert used for some other type. Even though replace the object with another object, it still has to follow the properties inside the initial object, we cannot even add another property. values can be different though.
   let ninja = {
   name: 'mario',
   belt: 'black',
   age: 30
   }

ninja = {
name: 'yoshi',
belt:'orange',
age: 34
}

6.a variable can be initiated without having a variable iff the type is mentioned. For example:
// explicit types
let character: string;
let age: number;
let isLoading: boolean;

7. to have a config file in order to seperate src files from public files, in terminal, write:
   npx tsc --init
   Then in thr config file, configure these commented lines:
   "outDir": "./public",  
    "rootDir": "./src",
