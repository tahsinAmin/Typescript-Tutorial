Tyescript allows us to type check during the development library whihc leads to cleaner code and less errors in the browser.

1. For translating ts to js:
   ->npx tsc fileName.ts

2. Typescript uses strict types where Javascript does not.
   ->For example:
   let character = 'Mario';
   character = 29; // This will thow an error!
   character = 'Gonzalves'; // Will not throw an error
