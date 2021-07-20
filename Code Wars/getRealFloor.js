//function converts American building floor to European 
function getRealFloor(n) {
  var trueFloor = 0;
  if (n > 0 && n <= 13) {
    trueFloor = n-1;
  } else if (n > 13) {
    trueFloor = n-2;
  } else {
    trueFloor = n;
  }
  return trueFloor;
}