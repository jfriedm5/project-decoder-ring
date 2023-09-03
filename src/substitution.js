// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

/*
When building the function, keep the following constraints and rules in mind:

The input could include spaces and letters as well as special characters such as #, $, *, etc.
Spaces should be maintained throughout.
Capital letters can be ignored.
The alphabet parameter must be a string of exactly 26 characters, which could include special characters such as #, $, *, etc. Otherwise, it should return false.
It returns false if there are any duplicate characters in the given alphabet.
All the characters in the alphabet parameter must be unique. Otherwise, it should return false.
*/
const substitutionModule = (function () {
  
  let abc = "abcdefghijklmnopqrstuvwxyz".split("");

function substitution(input, alphabet, encode = true) {
  
  const encAlpha=new Set(alphabet);
  if(!alphabet || alphabet.length!==26 || [...encAlpha].length < 26 ) return false;
  
  let key={};
  if(encode){
    for(let i = 0; i < 26; i++){
      key[abc[i]]=alphabet[i];
    }
  }else{
    for(let i = 0; i < 26 ; i++){
      key[alphabet[i]]=abc[i];
    }
  }
  key[' '] = ' ';

let message = input.toLowerCase().split("").map((char)=>{
  if(encode && /[^a-z]/.test(char)){
       return char; 
    }else if(!encode && /[^a-z\!\@\#\$\%\^\&\*\-\+\=\.\,\?]/.test(char)){
      return char; 
    }else {   
       return key[char];
    } 
  });
  return message.join("");
}
  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
//create a function to encode and decode a message using a subsitution cipher
//created an array of standard english alphabet  splitting the string on every char
//to check if the input alphabet key parameter has all unique characters, we stored our alphabet input into a new set. 
//Sets are a collection of values where each value can only occur once, so each character is unique and duplicates are automatically removed. 
//we then created an if statement that would return false if any of the following were true: alphabet input didn't exist, alphabet length was not 26 characters, or if the alphabet set had less than 26 letters ie duplicates were removed. 

//created an empty object to store our cipher key
// if encode is true we map over each character in 26 character alphabet, in each iteration we build a key object,
// where every property is a character from regular alphabet abc[i] and corrosponding value is a character from the substitution alphabet alphabet[i]
// otherise if encode is false (decode) we iterate over each character in 26 character alphabet, in each iteration we build a key object,
// where every property is a character from the subsitution alphabet alphabet[i] and the corrosponding value is a character from the regular alphabet abc[i]
// we also ensure that spaces are preserved in the key by adding key[' ']= ' ';

// we take our input parameter and covert it to lower case, then we split the string into individual characters inside an array, then mapping over each character
// the first condition inside our mapping function, if we are encoding and the current character isn't a letter from a-z the character is returned as is
// the second condition inside our mapping function, if we are decoding and the current character isn't a lower case letter or special character the character is returned as is 
// After each character is checked it is either returned as is or transformed using the key object. 
// We return our characters joined together into the final encoded or decoded message.