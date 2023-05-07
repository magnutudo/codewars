function isIsogram(str){
  let letters = {}
  for(let letter of str.toLowerCase()){
    if(letters[letter]){
      return false
    }
    else{
      letters[letter] = 1
    }
  }
  return true
}
console.log(isIsogram("aa"));