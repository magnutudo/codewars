function findOdd(A) {
  
  let counts = {}
  for(let i=0;i<A.length;i++){
    if(A[i] in counts){
      counts[A[i]]++
      console.log(counts)
    }else{
      counts[A[i]] = 1
    }

  }
  for(let key in counts){
    if(counts[key] % 2 != 0){
      return parseInt(key)
    }
  }
  return null
  
}
console.log(findOdd([1,1,2]))
