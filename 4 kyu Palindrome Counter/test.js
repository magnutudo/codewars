function isPalindrome(n) {
    return n.toString() === [...n.toString().split('')].reverse().join('')
  }
  
  function countPalindromes(a, b){
    let counter = 0;
    const correctA = Math.ceil(a)
    const correctB = Math.floor(b)
    for (let i = correctA; i <= correctB; i++) {
       if (isPalindrome(i)) {
         counter += 1;
       }
    }
    return counter;
  }
console.log(countPalindromes(21, 75.9))
