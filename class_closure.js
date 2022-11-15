class Car {
  constructor (name, year, range) {
    this.name = name; //pablic field
    this.year = year; //pablic field
    let prRange = range; //private field
    this.getRange = function(){ //closure
      return prRange;
    };
    /* this.setRange = function(r){ //closure
      prRange = r;
    } */
  }
  age(){
    return new Date().getFullYear() - this.year
  }
  
}

let Car1 = new Car ("Ford", "2011", 3000);
console.log(Car1.age());
Car1.prRange = 100;
console.log(Car1.getRange());

