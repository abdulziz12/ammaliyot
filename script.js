 let a= 5
let b= 5
console.log(a+b);

let a = +('12')
console.log(typeof a)


var random = Math.round(Math.random()*100)
console.log(random)
if (random  % 2 === 0) {
    console.log(`this number juft: ${random}`)
} else {
    console.log(`this munber toq: ${random}`)
}





let ism = prompt('soz kiriting')

if (ism.includes("mars")) {
    alert(`${ism}`)
} 
else{
    alert("mars it school")
}




var words = ["apple", "banana", "pear", "grape", "watermelon"];

// Array to store words with 5 or more characters
var longWords = [];

// Iterate through the words array
for (var i = 0; i < words.length; i++) {
    if (words[i].length >= 5) {
        longWords.push(words[i]);
    }
}

// Output the array with long words
console.log(longWords);




for (var i = 1; i <= 100; i++) {
    if (i % 2 === 0) {
        console.log(i + " is even");
    } else {
        console.log(i + " is odd");
    }
}