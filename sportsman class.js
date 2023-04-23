class Sportsman_eu {
  constructor(name, height_cm) {
    this._name = name;
    this._height_cm = height_cm;
  }
  height_cm() {
    return this._height_cm;
  }
  isTall() {
    if (this._height_cm > 180) {
      return "Tall";
    } else {
      return "Short";
    }
  }
}

const sportsman1 = new Sportsman_eu("Antonio", 185);
console.log(sportsman1.height_cm());
