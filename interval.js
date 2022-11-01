/* https://uk.javascript.info/settimeout-setinterval */

function sayHello() {
  console.log("Hello!");
}

/* setInterval (sayHello, 1000); */

function printNumber(from, to) {
  let i = from;
  let intervalId = setInterval(function () {
    console.log(i);
    if (i == to) {
      clearInterval(intervalId);
    }
    i++;
  }, 1000);
}

printNumber(5, 7);
