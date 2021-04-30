let characters = 'abcdefghijklmnopqrstuvwxyz';
let charactersLength = characters.length;
function generateArray(length) {
     let result = [];

     for (let i = 0; i < length; i++) {
          result.push(characters.charAt(Math.floor(Math.random() *
               charactersLength)));
     }
     return result.join('');
}

let generatedArray = generateArray(5);
let uniqueArray = [...new Set(generatedArray)];

if (uniqueArray.length == 5) {
     console.log(uniqueArray);

}

else if (uniqueArray.length != 5) {
     do {
          uniqueArray.push(characters.charAt(Math.floor(Math.random() * (charactersLength))))
     } while (uniqueArray.length == 5)

}



// let resultToHtml = document.getElementById("generated-array").innerHTML;
