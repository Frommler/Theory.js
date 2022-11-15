/* Оголосити клас для збереження даних про країну (назва, президент, кількість
  населення, площа). В класі реалізувати: конструктор з параметрами, відповідні методи-властивості та
  метод обчислення щільності населення країни (відношення площі до кількості). */

  class Country {
    constructor(name, pres, count, square) {
      this.name = name;
      this.pres = pres;
      this.count = count;
      this.square = square;
    }
    density() {
      return this.count / this.square;
    }
  }

  class Human {
    constructor(name, age){
      this.name = name;
      this.age = age;
    }
  }

  let Human1 = new Human("Zielienski", 45);

  let country = new Country("Ukraine", Human1, 43000000, 603700);
  console.log(country.pres.age);