// Оголосити клас для збереження даних про автомобіль (модель, вартість, пробіг). В класі
// реалізувати: конструктор з параметрами, відповідні методи-властивості та метод що визначає, чи має
// авто пробіг більше 20000 км.

class Auto {
  constructor (model, price, range) {
    this.model = model;
    this.price = price;
    this.range = range;
  }
  isRangeMoreLimit (run) {
    return this.range < run;
  }
}

let a = new Auto ("acura", 5000, 25000);
console.log(a.isRangeMoreLimit(30000));



