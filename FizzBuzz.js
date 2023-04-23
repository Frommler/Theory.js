/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function (n) {
  let res = [];
  for (var x = 1; x <= n; x++) {
    let str = '';
    if (!(x % 3)) str += 'fizz';
    if (!(x % 5)) str += 'buzz';
    if (str == '') str += x;
    res.push(str);
  }
  return res;
};

console.log(fizzBuzz(55));
