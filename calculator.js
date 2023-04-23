var readline = require("readline");

var rl = readline.createInterface(process.stdin, process.stdout);

rl.question("input num 1: ", (num1) => {
  rl.question("input num 2: ", (num2) => {
    rl.question("input operation ", (oper) => {
      console.log(num1 + oper + num2 + " = ");
      switch(oper){
        case '+':
          console.log(+num1 + +num2);
        break;
        case '-':
          console.log(num1 - num2);
        break;
        case '*':
          console.log(num1 * num2);
        break;
        case '/':
          console.log(num1 / num2);
        break;
      }
    });
  });
});

/* let num1 = 5;
let num2 = 6;
console.log(num1 + num2); */
