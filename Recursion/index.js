function pow(x, n) {
  let result = 1;
  for (let i = 0; i < n; i++) {
    result *= x; 
  }
  return result;
}

console.log(pow(2, 3));



function rpow(x, n) {
  let result = 1;
  if(n == 1){
    result = x;
    return result;
  } else {
    result = x * rpow(x, n - 1);
    return result;
  }
}

console.log(rpow(3, 3));


function rpow2(x, n){
  return n == 1 ? x : x * rpow2(x, n - 1);
}

console.log(rpow2(5, 5));


