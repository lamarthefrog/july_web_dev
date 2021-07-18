function digitize(n) {
  //code here
  
  var numString = n.toString();
  var myArray = [];
  
  for (i = 0; i < numString.length; i++) {
    myArray.push(numString[i]);
  }
  
  var reversedArray = myArray.reverse();
  var finalArray = [];
  
  for (i = 0; i < reversedArray.length; i++) {
    finalArray.push(parseInt(reversedArray[i]));
  }

  return finalArray;
}