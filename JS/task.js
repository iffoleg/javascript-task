let characters = 'abcdefghijklmnopqrstuvwxyz';
let charactersLength = characters.length;

function generateArray(length) {

     let result = [];
     for (let i = 0; i < length; i++) {
          result.push(characters.charAt(Math.floor(Math.random() *
               charactersLength)));
     }
     return result;
}


let generatedArray = generateArray(5);
let uniqueArray = [...new Set(generatedArray)];

if (generatedArray.length === 5) {
     let uniqueArray = [...new Set(generatedArray)];
     console.log(uniqueArray);
}
else {
     let generatedArray = generateArray(5);
     console.log(generatedArray);

}



for (let i = 0, container = document.getElementById("generated-array"); i < uniqueArray.length; i++) {
     const data = uniqueArray[i];
     const new_card = `<div>${data}</div>`;
     container.insertAdjacentHTML("beforeend", new_card);
}
