// classes
export class Invoice {
  constructor( // if use this way then we have to give the access modifiers
    readonly client: string,
    private details: string,
    public amount: number
  ){}

  format() {
    return `${this.client} owes £${this.amount} for ${this.details}`;
  }
}