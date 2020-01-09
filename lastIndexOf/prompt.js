// Write a function that returns the last index that a given element is found
// Ex: lastIndexOf(4, [2,3,6,4,7,4,9]) returns 5

function lastIndexOf(target, array) {
  // Write a function that returns the last index that a given element is found
// Ex: lastIndexOf(4, [2,3,6,4,7,4,9]) returns 5

function lastIndexOf(target, array) {
  let index = 0;
  for(var i = 0; array.length; i--){
      if(array[i] === target){
        return index = i;
      }
      return index;
  }
 }
 
 lastIndexOf(4, [2,3,6,4,7,4,9]) 
}
