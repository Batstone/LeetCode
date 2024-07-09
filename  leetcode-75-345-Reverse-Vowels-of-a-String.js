/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    const indicies = [];
    const vowelsFound = [];
 
    // split input string into array 
    const arr = s.split('');
 
    arr.forEach((letter, index) => {
     vowels.forEach((vowel, index2) => {
         // Check if letter matches a vowel
         if (letter.toLowerCase() === vowel) {
             lettersToReverse.push(letter);
             indicies.push(index);
         }
     });
    });
 
     // Reverse the vowels
     vowelsFound.reverse();
     vowelsFound.forEach((item, index) => {
         // Change vowel at found index
         arr[indicies[index]] = item;
     });
     return arr.join('');
 };