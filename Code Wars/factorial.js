function factorial(n)
{
  // Calculate the factorial here
  if (n > 12 || n < 0) {
    throw RangeError('This is not a valid range');
  } else if (n == 0) {
    return 1;
  } else {
    //using subtractive for loop since it's easier to conceptualize here
    for (var i = n - 1; i >= 1; i--) 
      {
        n = n * i;
      }
    return n;
  }
}