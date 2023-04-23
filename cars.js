let garageSasha = [
  "Mustang",
  "F-150",
  "Explorer",
  "Corvette",
  "Silverado",
  "Equinox",
  "Highlander",
  "Tacoma",
];

let garageOlya = [
  "Mustang",
  "Explorer",
  "Corvette",
  "Equinox",
  "Camry",
  "Tacoma",
  "Siesta",
];

/* garageSasha.forEach((carSasha) => {
  console.log(carSasha);
});

garageOlya.forEach((carOlya) => {
  console.log(carOlya);
}); */

let sameCars = [];

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
console.log("SashaCarsUniq",SashaCarsUniq);

let OlyaCarsUniq = [];

garageOlya.forEach(carOlya => {
  if(!garageSasha.includes(carOlya)){
    OlyaCarsUniq.push(carOlya);
  }
})
console.log("OlyaCarsUniq",OlyaCarsUniq);

let OlyaSashaCars = [];

garageOlya.forEach(carOlya => {
  if(garageSasha.includes(carOlya)){
    OlyaSashaCars.push(carOlya);
  }
})
console.log("OlyaSashaCars",OlyaSashaCars);