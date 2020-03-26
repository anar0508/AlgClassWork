let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

console.log(matrix);
console.log(matrix[0][2]);
console.log(matrix[2][0]);

for(let i =0; i<matrix.length; i++ ){
  console.log(matrix[1][i]);
}

for(let i =0; i<matrix.length; i++ ){
  console.log(matrix[i][0]);
}