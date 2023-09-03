// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope
  const encoder = {
    a: '11', b: '21', c: '31', d: '41', e: '51',
    f: '12', g: '22', h: '32', i: '42', j: '42',  
    k: '52', l: '13', m: '23', n: '33', o: '43', 
    p: '53', q: '14', r: '24', s: '34', t: '44',  
    u: '54', v: '15', w: '25', x: '35', y: '45', 
    z: '55',  
  };
  const decoder = { 
    11: 'a', 21: 'b', 31: 'c', 41: 'd', 51: 'e',
    12: 'f', 22: 'g', 32: 'h', 42: '[i/j]', 52: 'k',
    13: 'l', 23: 'm', 33: 'n', 43: 'o', 53: 'p', 
    14: 'q', 24: 'r', 34: 's', 44: 't', 54: 'u', 
    15: 'v', 25: 'w', 35: 'x', 45: 'y', 55: 'z',
    
  };

  function polybius(input, encode = true) {
    if (!encode && input.replace(/\s+/g, '').length % 2 != 0) return false;
     const direction = encode ? encoder : decoder;
     return input.toLowerCase().match(/[0-9]{2}|[a-z]|\s/g).map(code =>
      direction[code] || code).join('');
  };
 
  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
// if encode is false aka we are decoding and if we divide the length of the input without white spaces by 2 
// and the remainder of the division is not equal to 0 (aka division resulted in an odd number) we return false 
// direction of the code is dependent on whether encode is true or false
// if encode is true we use our encoder object against the input
// if encode is false we use our decoder object against the input
// Match all occurances where the input matches the provided regular expression; 2 digit numbers, any lower case letter, or whitespace characters; 
// Then using the map() method, we create a new array, for each matched character, it looks up that character in the corrosponding direction object, 
// if a matching key is found, it uses the corrosponding value, if a key is not found it uses the original item 
// we then join the array items back into a string to return or encoded or decoded resut. 

// regex match expression explained     
// [0-9] character set will match any of the characters between  0 & 9 
// {2} is only going to return 2 characters in a row
// | acts like an or, matching any 2 digit number or (lc) letter or empty space
// [a-z] character set will match any of the characters that are lowercase between a & z
// \s matches all white space in input
// /g allows for multiple matches/occurances  