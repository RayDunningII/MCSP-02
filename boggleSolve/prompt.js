// * Given string containing combination of letters from a-z,
// * each character has the value of its position in the alphabet
// * i.e. a=1, z=26 etc.
// return the sum of the values of each letter in string

const boggleSolve = str => {
    //create an array with all 26 letters in the alphabet
    const newArr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    //create a total count variable
    const total = 0;
    if(str){
        return total;
    }
    //iterate through the array
    for(let i = 0; i < newArr.length; i++){
        if(newArr[i] === str){
            total += i - 1
        }

    }
};
