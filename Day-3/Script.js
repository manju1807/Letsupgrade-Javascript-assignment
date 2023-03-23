// Letsupgrade Javascript bootcamp day-3 Assignment:
// Javascript code to print all the numbers divisible by 3 present in an array:

let arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18];

for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 3 === 0) {
    console.log(arr[i]);
  }
}

/* 
    Output:
            3
            6
            9
            12
            15
            18
*/
