// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
 
  function toCharCode(array,shift){
    return array.map((character) => {
      const code = character.toLowerCase().charCodeAt();
      return code >= 97 && code <= 122 ? code+shift : character;
    });
  }


  function caesar(input, shift, encode = true) {
    if(!shift||shift===0||shift<-25||shift>25){ return false };
    if (!encode ){ shift *= -1 };
  const inputArray = input.split("");
  const charCode = toCharCode(inputArray, shift);
  const wrappedNumbers = charCode.map(num => {
    if(typeof num === "number"){
    return ((num - 97 + 26 ) % 26) + 97;
    }
    return num;
  });
  const charCodeToString = wrappedNumbers.map(char  => 
    typeof char  === "number" ? String.fromCharCode(char) : char).join("");
    return charCodeToString;
  }
    return { 
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };

//helper function that turns the split input array letters into all lower case letters and then into ASCII character code, 
//if the codes are between 97(97=a) amd 122(122=z) we then implement our shift, if not the character code is left as is.

//returns false if shift doesn't exist, =0, is less than -25 or greater than 25
//determines whether function will encode or decode, if encode is false, we invert the shift to negative # so we can decode the input. 
//use split method to seperate the characters of the input message in a new array and store than in the inputArray variable
// call our helper function to convert our split inputArray into ASCII numbers codes and store result in inputNumbers variable
//We use map method to transform our shifted charcode inputNumbers, we check if each num is a number, otherwise its left alone, 
//if it is a number, then we take our shifted numbers and if the shift caused numbers go below 97 it will be wrapped back to 122 and if it goes above 122 it wraps back to 97
//this way no matter which direction the shift goes all the numbers correspond to ASCII lower case character codes.
//created variable charCodeToString to store our encoded numbers when we transform them back into letters and then join them together
//We check if the char is a number, if it is we convert it to a letter using String.fromCharCode() and if its not it stays as is, we then join all the char characters together
//and return our decoded input. 