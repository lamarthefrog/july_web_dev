//Multiplication table for number (1-10)

function multiTable(number) {
  // error case if number is out of range
  if (number > 10 || number < 1) {
    throw 'The number you have entered is not valid';
  // regular use
  } else {  
    var finalString = "";
    var mathResult = 0;
    
    // loop through numbers to generate times table
    // mathResult generates the value, finalString is steadily built each iteration
    for (i = 1; i <= 10; i++) {
      if (i != 10) {
        mathResult = i * number;
        finalString += `${i} * ${number} = ${mathResult}\n`;
      // else statement for final line, prevent newline character
      } else {
        mathResult = i * number;
        finalString += `${i} * ${number} = ${mathResult}`;  
        }
    }
    // final output
    return finalString;
  }
  
}