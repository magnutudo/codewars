function isValidWalk(walk) {
    if(walk.length !== 10){
        return false
    }
    let x  = 0
    let y = 0
    for(let i=0;i< walk.length;i++){
        switch(walk[i]){
            case "n":
                x++
                break;
            case "s":
                x--
                break;
            case "e":
                y++
                break;
            case "w":
                y--
                break;
            default:
                return false;
        }
    }
    return x === 0 && y === 0
}
console.log(isValidWalk(['w']));