function transpose(matrix) {
  let trans = []
  for(let i = 0; i<matrix[0].length;i++){
    trans[i] = []
  }
  for(let i =0; i<matrix.length;i++){
    for(let j = 0; j<matrix[0].length; j++){
      trans[j][i] = matrix[i][j]
    }
  }
  return trans

}
var matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];
var transposed = transpose(matrix);
console.log(transposed);
