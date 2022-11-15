let candies = ["lolipop", "gum", "barbaris"];
let cookies = ["oreo"];

let sweets = candies + cookies;
let sweets2 = candies.concat(cookies);
let sweets3 = [...candies, ...cookies];
let sweets4 = [candies, cookies, "icecream"];
let sweets5 = [...candies, ...cookies, "icecream"];

console.log(sweets);
console.log(sweets2);
console.log(sweets3);
console.log(sweets4);
console.log(sweets5);
