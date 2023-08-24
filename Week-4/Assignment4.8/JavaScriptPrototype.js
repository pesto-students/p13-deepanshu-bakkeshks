// Defining the Vehicle class
class Vehicle {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  getDetails() {
    return `${this.year} ${this.make} ${this.model}`;
  }
}

// Defining the Car class that extends Vehicle
class Car extends Vehicle {
  constructor(make, model, year, numDoors) {
    super(make, model, year);
    this.numDoors = numDoors;
  }

  getDetails() {
    return `${super.getDetails()}, ${this.numDoors} doors`;
  }
}

// Creating instances of Vehicle and Car
const vehicleInstance = new Vehicle("Toyota", "Camry", 2023);
const carInstance = new Car("Ford", "Mustang", 2023, 2);

// Calling the getDetails method on each instance
console.log(vehicleInstance.getDetails()); // 2023 Toyota Camry
console.log(carInstance.getDetails()); // 2023 Ford Mustang, 2 doors
