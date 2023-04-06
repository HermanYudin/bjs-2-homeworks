function getArrayParams(...arr) {
let min = arr[0];
let max = arr[0];
let sum = 0;
  for (let i=0;i<arr.length;i++) {

  if (arr[i] > max){
    max = arr[i];
  }
  else if (arr[i] < min){
    min = arr[i];
  }
  
   sum = sum + arr[i];

  }

  let avg = Number(parseFloat(sum/arr.length).toFixed(2))

  return { min: min, max: max, avg: avg };
}


function summElementsWorker(...arr) {
let sum = 0;
for (let i=0;i<arr.length;i++) {
sum += arr[i];
}
return sum;

function differenceMaxMinWorker(...arr) {
for (let i=0;i<arr.length;i++) {
  if (arr[i] = max)
  return arr[i];
  
  else if (arr[i] = min){
    return arr[i];
  }
}

function differenceEvenOddWorker(...arr) {

}

function averageEvenElementsWorker(...arr) {

}





function makeWork (arrOfArr, func) {

  }
}
