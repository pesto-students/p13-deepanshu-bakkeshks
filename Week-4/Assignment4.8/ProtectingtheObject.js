// Creating a JavaScript object called person with properties name, age, and email.
const person = {
  _name: "John",
  _age: 30,
  _email: "john@example.com",

  // Getter method for age
  getAge() {
    return this._age;
  },

  // Setter method for age
  setAge(age) {
    if (age >= 0 && age <= 120) {
      this._age = age;
    } else {
      console.log("Invalid age");
    }
  },
};

// Using Object.defineProperty to make name and email properties read-only
Object.defineProperty(person, "name", {
  get() {
    return this._name;
  },
});

Object.defineProperty(person, "email", {
  get() {
    return this._email;
  },
});

// Using Object.defineProperty to make age property write-only
Object.defineProperty(person, "age", {
  set(age) {
    this.setAge(age);
  },
});

console.log(person.name); // John
console.log(person.email); // john@example.com
person.age = 25; // Using the write-only setter
console.log(person.getAge()); // 25
