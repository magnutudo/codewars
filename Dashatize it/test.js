function dashatize(num) {
  return num.toString().
    replace(/([13579])/g,'-$1-').
    replace(/\-+/g,'-').
    replace(/^\-/,''). 
    replace(/\-$/,'');
}
console.log(dashatize(974302))
