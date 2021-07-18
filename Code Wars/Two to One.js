function longest(s1, s2) {
  // your code
  var myArray = [];
  
  for (i = 0; i < s1.length; i ++)
    {
      if (myArray.includes(s1[i]))
        {
          continue;
        }
      else
        {
          myArray.push(s1[i]);
        }
    }
  
  for (i = 0; i < s2.length; i++)
    {
      if (myArray.includes(s2[i]))
        {
          continue;
        }
      else
        {
          myArray.push(s2[i]);
        }
    }
  
  myArray.sort()
  
  var finalString = myArray.toString();
  var finalStringNoCommas = finalString.replace(/,/g, '');
  return finalStringNoCommas;
}