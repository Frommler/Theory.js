let candies = ["lolipop", "gum", "barbaris"];
let cookies = ["oreo"];

let sweets = candies + cookies;
let sweets2 = candies.concat(cookies);
let sweets3 = [...candies, ...cookies];
let sweets4 = [candies, cookies, "icecream"];
let sweets5 = [...candies, ...cookies, "icecream","icecream2","icecream3"];

let sweets6 = [{name: "lolipop", category: "candies"}, {name: "barbaris", category: "candies"}, {name: "gum", category: "candies"}, {name: "sojuznoje", category: "cookies"}, {name: "oreo", category: "cookies"}];

console.log(sweets);
console.log(sweets2);
console.log(sweets3);
console.log(sweets4);
console.log(sweets5);

let sweetsFind = sweets3.find((item) => {
  return item == "gum";
});
console.log(sweetsFind);

let cookiesFilter = sweets6.filter((item) => item.category == "cookies");
console.log(cookiesFilter);

let cookiesJoin = sweets5.join(" * ");
console.log(cookiesJoin);

let cookiesMap = sweets6.map(item => item.name).join(" * ");
console.log(cookiesMap);

let arraySlice = sweets6.slice(0, 5);
console.log(arraySlice);

let arraySindindex = sweets5.slice(sweets5.indexOf("oreo"), -1);
console.log(arraySindindex);

let objectFindindex = sweets6.slice(sweets6.findIndex((item) => item.name == "gum"));
console.log(objectFindindex);

let arrayIncludes = sweets6.some((item) => item.name == "gum");
console.log(arrayIncludes);