function getAverage(marks){
  //TODO : calculate the downward rounded average of the marks array
  var arrayLen = marks.length;
  var total = 0;
  var average = 0;
  
  for (i = 0; i < arrayLen; i ++) {
    total += marks[i];
  }
  
  average = Math.floor(total / arrayLen);
  return average;
}