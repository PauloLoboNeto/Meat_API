export class User {
  constructor(public email: string, public name: string, public password: string) { }

  matches(another: User): boolean {
    return another !== undefined && another.email === this.email && another.password === this.password
  }
}

export const users: {[key: string]: User} = {
  "paulo@gmail.com": new User('paulo@gmail.com', 'Paulo', 'paulo'),
  "valdiscley@gmail.com": new User('valdiscley@gmail.com', 'Valdiscley', 'valdiscley23')
}
