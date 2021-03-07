module.exports = function check(str, bracketsConfig) {
  
  //Array.prototype.map()
  //create a new array of strings
  let arrBrackets = bracketsConfig.map((item) => item.join(""));
 
    for ( let i = 0; i < arrBrackets.length; i++) {
	  //String.prototype.includes()
	  if (str.includes(arrBrackets[i])) {
		  //String.prototype.replace()
		  str = str.replace(arrBrackets[i], "");
		  //start the loop again
		  i = -1;
	  }
  }
  
  return !str;
  
}
