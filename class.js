class Rectangle {
  constructor(height, width) { /*class fields or properties */
    this.height = height;
    this.width = width;
  }
  /*methode*/ area() {
    return this.height * this.width;
  }
  setHeight(height) {
    this.height = height;
  }
  getHeight() {
    return this.height;
  }
  setWidth(width) {
    this.width = width;
  }
  getWidth() {
    return this.width;
  }
  static Storona = 45;
}

let r = new Rectangle(20, 30);
r.setHeight(88);
console.log(r.getHeight());
console.log(Rectangle.Storona);
console.log(r.Storona);

