export class Person {
  public PersonName: string;
  public PersonAge: number;
  constructor(pname: string = '', page: number = 0) {
    this.PersonName = pname;
    this.PersonAge = page;
  }
}
