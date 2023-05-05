function createPhoneNumber(numbers){
    const firstPart = numbers.slice(0,3).join("")
    const secondPart = numbers.slice(3,6).join("")
    const thirdPart = numbers.slice(6).join("")
    const formattedNubmer = `(${firstPart}) ${secondPart}-${thirdPart}`
    return formattedNubmer
  }