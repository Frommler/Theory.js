let garage = [
  ["Mustang", "F-150", "Explorer", "x"],
  ["Corvette", "Silverado", "Equinox"],
  ["Camry", "Highlander", "Tacoma", "z"],
];

for (let i = 0; i < garage.length; i++) {
  for (let j = 0; j < garage[i].length; j++) {
    /* console.log(i + " " + j + " " + garage[i][j]); */
    if (i == j) {
      console.log(garage[i][j]);
    }
  }
}
