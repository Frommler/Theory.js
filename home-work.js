var readline = require("readline");

var rl = readline.createInterface(process.stdin, process.stdout);

let cars = [
  {
    color: "purple",
    type: "minivan",
    registration: new Date("2022-12-08"),
    capacity: 7,
  },
  {
    color: "red",
    type: "station wagon",
    registration: new Date("2022-12-08"),
    capacity: 5,
  },
  {
    color: "blue",
    type: "van",
    registration: new Date("2021-12-01"),
    capacity: 6,
  },
  {
    color: "white",
    type: "hachback",
    registration: new Date("2011-10-08"),
    capacity: 5,
  },
  {
    color: "green",
    type: "liftback",
    registration: new Date("2011-01-08"),
    capacity: 5,
  },
  {
    color: "black",
    type: "coupe",
    registration: new Date("2016-04-01"),
    capacity: 2,
  },
  {
    color: "orange",
    type: "microbus",
    registration: new Date("2015-05-08"),
    capacity: 12,
  },
  {
    color: "yellow",
    type: "sedan",
    registration: new Date("2024-07-05"),
    capacity: 5,
  },
  {
    color: "gray",
    type: "suv",
    registration: new Date("2022-12-11"),
    capacity: 6,
  },
  {
    color: "black",
    type: "truck",
    registration: new Date(),
    capacity: 3,
  },
  {
    color: "black",
    type: "truck",
    registration: new Date(),
    capacity: 3,
  },
  {
    color: "black",
    type: "truck",
    registration: new Date(),
    capacity: 3,
  },
];

cars.sort((a, b) => {
  if (a.type < b.type) {
    return -1;
  }
  if (a.type > b.type) {
    return 1;
  }
  return 0;
});
console.log(cars);

/* реалізуй фільтрацію по даті, в даному прикладі по даті 2022-12-08 функція повинна повернути перші 2 об'єкта */

/* let today = new Date();
let findTodayCar = cars.filter(
  (item) => item.registration.getFullYear() == today.getFullYear()
); */

/* console.log(findTodayCar); */

/* rl.question("car color of " + today.getFullYear() + " ", (color) => {
  rl.question("car type of ", (typeOfCar) => {
    let findCar = findTodayCar.filter(
      (car) => car.color == color && car.type == typeOfCar
    );
    console.log(findCar);
  });
}); */

/* rl.question("inpet color of car ", (carColor) => {
  rl.question("inpet type of car ", (carType) => {
    rl.question("inpet date of reg in format mm-dd-yyyy", (carReg) => {
      rl.question("inpet capacity of car ", (carCap) => {
        cars.push({
          color: carColor,
          type: carType,
          registration: new Date(carReg),
          capacity: carCap,
        });
        console.log(cars);
      });
    });
  });
}); */
