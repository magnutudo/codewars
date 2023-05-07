function isOddHeavy(n){
  if(n.length === 1 && n[0] % 2 !== 0){
    return true
  }
  let max = -1000000
  for(let digit of n){
    if(digit % 2 !== 0 && digit>max){
      max = digit
    }
  }
  for(let digit of n){
    if(digit %2 === 0 && digit > max){
      return false
    }
  }
  
  return true


}
console.log(isOddHeavy([1,-2,-1,2]));
