function lastDigit(n, d) {
  if (d <= 0) {
    return [];
  } else if (d > n.toString().length) {
    return n.toString().split('').map(Number);
  } else {
    return n.toString().slice(-d).split('').map(Number);
  }
  
}
console.log(lastDigit([1,2,3,4],6));