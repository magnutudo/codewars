function count(string) {
 const eq = {} 
 if(string === ''){
  return {}
 }
 
 for(let i=0;i<string.length;i++){
  let newKey = ''
  let count = 0
  for(let j=0;j<string.length;j++){
    if(string[j] === string[i]){
      count++
      newKey = string[i]
      eq[newKey] = count
    }
  }
 }
 return eq
}
console.log(count("aba"));
