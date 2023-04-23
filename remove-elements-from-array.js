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
    registration: new Date("2024-12-11"),
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

let today = new Date(); // compare Dates in JS

cars = cars.filter(item => {
  return(!(item.registration < today) && !(item.registration > today));
});

console.log(cars);