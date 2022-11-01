/* https://uk.javascript.info/settimeout-setinterval */

/* function sayHello () {
  console.log("Hello!");
};

setTimeout (sayHello, 5000); */

function printNumbers(from, to) {
  let i = from;
  setTimeout(function go() {
    if (i <= to) {
      setTimeout(go, 1000);
      console.log(i);
    }
    i++;
  }, 1000);
}

printNumbers(5, 8);
