let candies = ["lolipop", "gum", "barbaris"];
let cookies = ["oreo"];
let cake = {name: "Napoleon", country: {city: "Paris"}, price: "153 $"};
const cloneFood = { ...cake };
/* const cloneFood = JSON.parse(JSON.stringify(cake)); */

let cake2 = cake;
cake2.name = "Miedovik";
cloneFood.country.city = "London";

console.log(cloneFood);
console.log(cake);
console.log(cake2);


let tort = "Inej";
console.log(tort);
let tort2 = tort;
tort2 = "Terikon";
console.log(tort2);

let sweets = candies + cookies;
let sweets2 = candies.concat(cookies);
let sweets3 = [...candies, ...cookies];
let sweets4 = [candies, cookies, "icecream"];
let sweets5 = [...candies, ...cookies, "icecream","icecream2","icecream3"];

console.log(sweets);
console.log(sweets2);
console.log(sweets3);
console.log(sweets4);
console.log(sweets5);