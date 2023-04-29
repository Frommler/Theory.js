const {getCarsBrandUniq, getTopThreeCarsOfGarage} = require("./functions.js");

let garageSasha = [
  {name:"Mustang", year: 1965},
  {name:"F-150", year: 2010},
  {name:"Explorer", year: 2000},
  {name:"Corvette", year: 1970},
  {name:"Silverado", year: 1968},
  {name:"Equinox", year: 2005},
  {name:"Highlander", year: 2015},
  {name:"Tacoma", year: 1985},
];

let findCar = garageSasha.findIndex((car)=>{
  return car.name == "Yaris";
})

console.log(findCar);

let garageOlya = [
  {name:"Mustang",year: 1970},
  {name:"Explorer",year: 1999},
  {name:"Corvette",year: 1966},
  {name:"Equinox",year: 2003},
  {name:"Camry",year: 2005},
  {name:"Tacoma",year: 2015},
  {name:"Siesta",year: 1995},
];

/* garageSasha.forEach((carSasha) => {
  console.log(carSasha);
});

garageOlya.forEach((carOlya) => {
  console.log(carOlya);
}); */

/* let sameCars = [];

garageSasha.forEach((carSasha) => {
  garageOlya.forEach((carOlya) => {
    if (carSasha == carOlya) {
      sameCars.push(carSasha);
    }
  });
});
console.log("sameCars", sameCars);

console.log(
  garageSasha.find((carSasha) => {
    return carSasha == "Mustang";
  })
);

let SashaCarsUniq = [];

garageSasha.includes("Mustang");

garageSasha.forEach((carSasha) => {
  if (!garageOlya.includes(carSasha)) {
    SashaCarsUniq.push(carSasha);
  }
});
console.log("SashaCarsUniq", SashaCarsUniq);

let OlyaCarsUniq = [];

garageOlya.forEach((carOlya) => {
  if (!garageSasha.includes(carOlya)) {
    OlyaCarsUniq.push(carOlya);
  }
});
console.log("OlyaCarsUniq", OlyaCarsUniq);

let OlyaSashaCars = [];

garageOlya.forEach((carOlya) => {
  if (garageSasha.includes(carOlya)) {
    OlyaSashaCars.push(carOlya);
  }
});
console.log("OlyaSashaCars", OlyaSashaCars); */

let carsBrandUniq = [];
let commonGarage = garageOlya.concat(garageSasha);

carsBrandUniq = getCarsBrandUniq(commonGarage);
console.log(carsBrandUniq);
console.log(getTopThreeCarsOfGarage(garageOlya));
