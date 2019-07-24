var matrix3x3x3 = []; 
for (var i=0; i<3; i++){ 
 matrix3x3x3[i] = []; 
 for (var j=0; j<3; j++){ 
 matrix3x3x3[i][j] = []; 
 for (var z=0; z<3; z++){ 
 matrix3x3x3[i][j][z] = i+j+z; 
 } 
 } 
}
console.log(matrix3x3x3);
[
   [
      [ 0, 1, 2 ], [ 1, 2, 3 ], [ 2, 3, 4 ] 
    ],
   [
      [ 1, 2, 3 ], [ 2, 3, 4 ], [ 3, 4, 5 ]
    ],
   [ 
     [ 2, 3, 4 ], [ 3, 4, 5 ], [ 4, 5, 6 ]
    ] 
 ]