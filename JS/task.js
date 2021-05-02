function getFile(fileName) {
     let req = new XMLHttpRequest();
     req.open('GET', fileName, false);
     req.send(null);
     return JSON.parse(req.responseText);
}
let jsonData = getFile('list.json');

console.log(jsonData);


function generateArray(length = 5) { //Generate array of 5 random unique letters
     const uniqueSet = new Set();
     while (uniqueSet.size < length) {
          const candidate = 97 + Math.floor(Math.random() * 26);
          uniqueSet.add(candidate);
     }
     return [...uniqueSet].map((x) => String.fromCharCode(x));
}

let generatedArray = generateArray();

for (let i = 0, container = document.getElementById("generated-array"); i < generatedArray.length; i++) { //Divides array to separate divs
     const data = generatedArray[i];
     const displayedDiv = `<div class="specific-letter" onclick="click()">${data}</div>`;
     container.insertAdjacentHTML("beforeend", displayedDiv);
}


function click() {
     let letters = document.getElementsByClassName("specific-letter");
     for (let i = 0; i < letters.length; i++) {
          letters[i].addEventListener("click", clickDiv, false);
     }
}

function clickDiv() { //On click setting letter to variable
     let clickedDiv = this.innerHTML
     let result = document.getElementById("names");
     let ss = ['aa', 'bb'];
     const startsWith = ss.filter((name) => name.startsWith(clickedDiv));  // Finds a word in array which starts on clicked letter
     result.innerHTML = startsWith;
}
click();

