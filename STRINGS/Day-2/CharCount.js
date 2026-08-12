// COunting the occurence of a character in a string

let str = "Mississipi";

// count for the charcater 's'
let char = "s";
let count  = 0;
for (let i = 0; i<str.length;i++){
    if(str[i].toLowerCase() === char){
        count++;
    }
}
console.log(`The Character occurence for ${char} is ${count}`);