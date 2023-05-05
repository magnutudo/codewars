function getAverage(marks){
    let sum = 0
    for(let i=0;i<marks.length;i++){
        sum += marks[i]
    }
    let average 
    average = Math.floor(sum / marks.length)
    return average
}
console.log(getAverage([2,2,2,2]));