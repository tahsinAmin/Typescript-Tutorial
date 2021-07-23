// When you give ! at the end, then you're sure that there's an element
const anchor = document.querySelector('a')!;

// if(anchor){
//   console.log(anchor.href);
// }
console.log(anchor.href);

// What if there's another form?
// const form = document.querySelector('form')!;

// Cast it to HTMLFormElement
const form = document.querySelector('.new-item-form') as HTMLFormElement;
console.log(form.element);

// inputs
const type = document.querySelector('#type') as HTMLSelectElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

form.addEventListener('submit', (e:Event) => {
  e.preventDefault();
  console.log(
    type.value,
    tofrom.value,
    details.value,
    amount.valueAsNumber
  );
});
