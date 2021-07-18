function countBy(x, n) {
  var z = [];

  for (i = 0; i < n; i++) {
    z.push((i+1) * x);
  }
  return z;
}