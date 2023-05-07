function disemvowel(str) {
  let newStr = ''
  let vowels = ['a','e','u','o','i']
  for(let i=0;i<str.length;i++){
    if(vowels.indexOf(str[i].toLowerCase()) === -1){
      newStr += str[i]

    }
  }
  return newStr
}
console.log(disemvowel("This website is for losers LOL!"));