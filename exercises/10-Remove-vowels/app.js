// Your code goes here
const rapid=(str) => {
    let consonants=[];
    let vowels=["a","e","i","o","u"];

    for(let i=0; i<str.length;i++){
        if(!vowels.includes(str[i].toLowerCase()))
            {
                consonants.push(str[i].toUpperCase());

            }
        
    }

return consonants.join(''); // Changes the array into a string (nice for later use)
}


// Work above this line; do not change code below
let str = "John";
console.log(rapid(str));
