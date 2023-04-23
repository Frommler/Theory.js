let arr = [
  { mark: "vw", year: 1950 },
  { mark: "opel", year: 1960 },
  { mark: "bmw", year: 1980 },
  { mark: "bmw", year: 2000 },
];

const bandedArr = [
  { mark: "opel", year: 1960 },
  { mark: "bmw", year: 1980 },
];

arr = arr.filter((a) => {
  bandedArr.forEach((bandedArrItem) => {
    return a.year != bandedArrItem.year;
  });
});
console.log(arr);
