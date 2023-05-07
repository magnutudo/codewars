function accum(s) {
	let res = ''
  for(let i=0;i<s.length;i++){
    res += s[i].toUpperCase();
    for(let j=0;j<i;j++){
      res +=  s[i].toLowerCase() 
    }
    res+= "-"
  }
  return res.slice(0,-1)
}
console.log(accum("ZpglnRxqenU"));
