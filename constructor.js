function Person(nameFromConstructor, ageFromConstructor) {
  console.log(this);
  this.name = nameFromConstructor;
  this.age = ageFromConstructor;
  return 25;
}
var person1 = Person("Anton", "32");
var person2 = new Person("Dima", "17");
var person3 = { name: "Sergey", age: "54" };
console.log(person1);
console.log(person2);
console.log(person3);
console.log(person2.name);
console.log(person2.age);
