// Given a string, return true if it contains all balanced parenthesis (),
// curly-brackets {}, and square-brackets [].

//                        Examples
//               Input	                       Output
// str: "(x + y) - (4)"           |   true
// str: "(x + y) - (4)"           |   true
// str: "(((10 ) ()) ((?)(:)))"   |   true
// str: "[{()}]"                  |   true
// str: "(50)("                   |   false
// str: "[{]}"                    |   false
const isBalanced = str => {
    //hold the result boolean and default to true
    const result = true;
    // use a stack to store all opening brackets
    const stack = [];
    // Create key/value pairs to know which opening bracket goes with
    const currectBracket = {
        '}': '{',
        ']': '[',
        ')': '(',
    }
    //iterate through str
    //if there push in the bracket and then check if it has a match 
    for(let i = 0; i < str.length; i++){
      const current = str.charAt(i);
      if(current === '{', current === '||', current ===  '[' || '(')
    }


    

};



  