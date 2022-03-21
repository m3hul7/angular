/** User Model */
export class User {
    public id: number;
    public fname: string;
    public lname: string;
    public email: string;
    constructor(
      id: number,
      firstname: string,
      lastname: string,
      email: string
    ) {
      this.id = id;
      this.fname = firstname;
      this.lname = lastname;
      this.email = email;
    }
  }