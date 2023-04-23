/* const parent = {
  mam_name: "Nelia", 
  mam: () => {
    console.log(this ," 1");
    console.log(this.mam_name + " This is my mam");
  },
};
console.log(this , " 2");
const father = {...parent};
father.mam_name = "Anna";
father.mam(); */


let animals = {
  domesticAnimals: ["cat", "dog", "cow", "goat", "sheep", "donkey", "pig", "horse"],
  printdomesticAnimals: function () {
    setTimeout(() => {
      console.log(this);
      console.log(this.domesticAnimals.join(' '));
    }, 3000);
  },
};
animals.printdomesticAnimals();


