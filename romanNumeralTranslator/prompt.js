/**
 * Given a roman numeral as input, write a function that converts the roman
 * numeral to a number and outputs it.
 *
 * Ex:
 * translateRomanNumeral("LX") // 60
 *
 * When a smaller numeral appears before a larger one, it becomes
 * a subtractive operation. You can assume only one smaller numeral
 * may appear in front of larger one.
 *
 * Ex:
 * translateRomanNumeral("IV") // 4
 *
 * You should return `null` if the input is not a string. You can expect
 * all non-empty string inputs to be valid roman numerals.
 */

var DIGIT_VALUES = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000
};

var translateRomanNumeral = function(romanNumeral) {
  //create a result variable
  //Split the input at each character 
  //itterate through the input
  //put the current letter and next letter into variables
  //if the current letter is undefined - return null
  //else if current letter is less than next add current letter minus next letter to result variable
  //double increment to skip next letter
  //else add current letter to result 
  //return result
  let result = 0;
  let input = romanNumeral.split('');

  for(let i = 0; i < input.length; i++){
     let currentLetter = DIGIT_VALUES[i];
     let nextLetter = DIGIT_VALUES[i + 1];
     if (currentLetter = undefined){
       return null;
     } else {
      if (currentLetter < nextLetter) {
        result +=  nextLetter - currentLetter;
        i++;
      } else {
        result += currentLetter;
      }
     }
  }
  return result;

};
