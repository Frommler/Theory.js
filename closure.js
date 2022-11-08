
function counter() { // function with closure
  let a = 0;
  return function add() {  // these is closure
    a++;
    console.log(a);
  };
}

let add = counter();

console.log(add.prototype);
add();
add();
add();
add();