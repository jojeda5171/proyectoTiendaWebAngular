export class Contact {
  _id?: string;
  name: string;
  address: string;

  constructor(name: string, address: string) {
    this.name = name;
    this.address = address;
  }
}
