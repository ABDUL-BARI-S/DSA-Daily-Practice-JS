// Counting the number of upperCase and lowerCase letters in a string.

// Method 1
// let str = "Hello JAVAscript is the BEST";

// let upperCaseCharacters = 0;
// let lowerCaseCharacters = 0;
// for(let char of str){
//     if(char === ' '){
//         continue;
//     }
//      else if (char === char.toUpperCase()){
//         upperCaseCharacters++;
//     } 
//     else {
//         lowerCaseCharacters++;
//     }
// }
// console.log("UpperCase : ", upperCaseCharacters);
// console.log("LowerCase : ", lowerCaseCharacters);

// Method 2

let str = "Hello JAVAscript is the BEST";

let spaces = 0;
let upperCaseCharacters = 0;
let lowerCaseCharacters = 0;
for(let char of str){
    if(char === ' '){
       spaces++;
    }
     else if (char === char.toUpperCase()){
        upperCaseCharacters++;
    } 
    else {
        lowerCaseCharacters++;
    }
}
console.log("UpperCase : ", upperCaseCharacters);
console.log("LowerCase : ", lowerCaseCharacters);
console.log("Spaces : ", spaces);