export class ContactPutInputDTO {
  constructor(id: number | undefined, firstName: string, lastName: string, age: number, gender: string, phone: number, email: string) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.gender = gender;
    this.phone = phone;
    this.email = email;
  }

  id: number | undefined;
  firstName: string;
  lastName: string;
  age: number;
  gender: string;
  phone: number;
  email: string;
}