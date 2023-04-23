let matrix = [
  [0, 1, -2],
  [3, -4, 5],
  [6, 7, -8],
];

console.log(matrix[0][2]);
console.log(matrix[1][2]);
console.log(matrix[0][2]);


let sumOfLustCollumn = 0;
for (let i = 0; i < matrix.length; i++) {
  for (let j = 0; j < matrix.length; j++) {
    if (j == 1) {
      sumOfLustCollumn += matrix[i][j];
    }
  }
}
console.log(sumOfLustCollumn);
