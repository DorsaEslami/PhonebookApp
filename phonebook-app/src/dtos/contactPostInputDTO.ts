

export class ContactPostInputDTO {
  constructor(firstName: string, lastName: string, age: number, gender: string, phone: number, email: string) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.gender = gender;
    this.phone = phone;
    this.email = email;
  }
  firstName: string;
  lastName: string;
  age: number;
  gender: string;
  phone: number;
  email: string;
}