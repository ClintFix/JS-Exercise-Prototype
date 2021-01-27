/*
  EXAMPLE TASK:
    - Write an Airplane constructor that initializes `name` from an argument.
    - All airplanes built with Airplane should initialize with an `isFlying` of false.
    - Give airplanes the ability to `.takeOff()` and `.land()`:
        + If a plane takes off, its `isFlying` property is set to true.
        + If a plane lands, its `isFlying` property is set to false.
*/

// EXAMPLE SOLUTION CODE:
function Airplane(name) {
    this.name = name;
    this.isFlying = false;
  }
  Airplane.prototype.takeOff = function () {
    this.isFlying = true;
  };
  Airplane.prototype.land = function () {
    this.isFlying = false;
  };
  
  
  /*
  // 👇 COMPLETE YOUR WORK BELOW 👇
  // 👇 COMPLETE YOUR WORK BELOW 👇
  // 👇 COMPLETE YOUR WORK BELOW 👇
  */
  
  /*
    TASK 1
      - Write a Person Constructor that initializes `name` and `age` from arguments.
      - All instances of Person should initialize with an empty `stomach` array.
      - Give instances of Person the ability to `.eat("someFood")`:
          + When eating an edible, it should be pushed into the `stomach`.
          + The `eat` method should have no effect if there are 10 items in the `stomach`.
      - Give instances of Person the ability to `.poop()`:
          + When an instance poops, its `stomach` should empty.
      - Give instances of Person a method `.toString()`:
          + It should return a string with `name` and `age`. Example: "Mary, 50"
  */
  
  // Person contructor function
 function Person(name, age) {
    this.name = name;
    this.age = age;
    this.stomach = [];
  }
// giving Person methods
Person.prototype.eat = function(edible){
  if(this.stomach.length < 10) {
    this.stomach.push(edible);  //adds edible to stomach until there are 10 items in stomach
  }
}
Person.prototype.poop = function(){
  this.stomach = []; // resets array to empty array
}
Person.prototype.toString = function(){
  return `${this.name}, ${this.age}`;
}

const personOne = new Person('Clint','34');
personOne.toString();
 

  
  
  
  
  /*
    TASK 2
      - Write a Car constructor that initializes `model` and `milesPerGallon` from arguments.
      - All instances built with Car:
          + should initialize with an `tank` at 0
          + should initialize with an `odometer` at 0
      - Give cars the ability to get fueled with a `.fill(gallons)` method. Add the gallons to `tank`.
      - STRETCH: Give cars ability to `.drive(distance)`. The distance driven:
          + Should cause the `odometer` to go up.
          + Should cause the the `tank` to go down taking `milesPerGallon` into account.
      - STRETCH: A car which runs out of `fuel` while driving can't drive any more distance:
          + The `drive` method should return a string "I ran out of fuel at x miles!" x being `odometer`.
  */
  
 function Car(model, milesPerGallon) {
    this.model = model;
    this.milesPerGallon = milesPerGallon;
    this.tank = 0;
    this.odometer = 0;
  }

  Car.prototype.fill = function(gallons) {
    this.tank += gallons;
  }

  Car.prototype.drive = function(distance) {
    const gallonsUsed = distance / this.milesPerGallon;; // calculates gallons used to make desired trip distance
      console.log(`Gallons Used: ${gallonsUsed}`);
    const distanceDrivenToEmpty = (distance - ((gallonsUsed - this.tank) * this.milesPerGallon)) //calculates distance driven until tank empty
      console.log(`Distance Driven to Empty: ${distanceDrivenToEmpty}`);
    this.odometer += distanceDrivenToEmpty; // updates odo to be actual driven miles. 
      console.log(`Odometer: ${this.odometer}`);
    const odometerReading = this.odometer;
    if (gallonsUsed > this.tank) {
      return `I ran out of fuel at ${odometerReading} miles!`
    } else {
      this.tank -= gallonsUsed;
    }
  }

  const geoMetro = new Car('Geo Metro', '40');
  geoMetro.fill(10);
  console.log(geoMetro.tank);
  console.log(geoMetro.drive(401));
  
  /*
    TASK 3
      - Write a Baby constructor subclassing Person.
      - Besides `name` and `age`, Baby takes a third argument to initialize `favoriteToy`.
      - Besides the methods on Person.prototype, babies have the ability to `.play()`:
          + Should return a string "Playing with x", x being the favorite toy.
  */
 function Baby(name, age, favoriteToy) {
   Person.call(this, name, age); //inheriting Person attributes
   this.favoriteToy = favoriteToy;
 }
 Baby.prototype = Object.create(Person.prototype);
 Baby.prototype.play = function(){
   return `Playing with ${this.favoriteToy}`;
 }

 const newBaby = new Baby('Rylee','2','dresses'); 
 console.log(newBaby.play());
  
  /* 
    TASK 4
    In your own words explain the four principles for the "this" keyword below:
    1. Window binding: this in global scope will bind to window
    2. Implicit binding: this refers to the object before the dot when a function is called
    3. New binding: this refers to a specific instance of an object created by the constructor function
    4. Explicit binding: when this is explicitly binded using .call, .bind. or .apply
  */
  
  
  ///////// END OF CHALLENGE /////////

  /* 🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑 Please do not modify anything below this line 🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑 */
function foo(){
    return 'bar';
}

export default{
    foo,
    Person, 
    Car,
    Baby
}