import { HasFormatter } from '../interfaces/HasFormatter.js';

// classes
export class Invoice implements HasFormatter{ // by implementing the interface, we force to add all the propoerties the interface has provided as a signature.
  constructor( // if use this way then we have to give the access modifiers
    readonly client: string,
    private details: string,
    public amount: number
  ){}

  format() {
    return `${this.client} owes £${this.amount} for ${this.details}`;
  }
}