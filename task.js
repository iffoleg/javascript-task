function getFile(fileName) {  //Parsing JSON
     let req = new XMLHttpRequest();
     req.open('GET', fileName, false);
     req.send(null);
     return JSON.parse(req.responseText);
}
const jsonData = getFile('list.json');

function generateArray(length = 5) { //Generate array of 5 random unique letters
     const uniqueSet = new Set();
     while (uniqueSet.size < length) {
          const candidate = 97 + Math.floor(Math.random() * 26);
          uniqueSet.add(candidate);
     }
     return [...uniqueSet].map((x) => String.fromCharCode(x));
}

let generatedArray = generateArray();
generatedArray = generatedArray.map(function (x) { return x.toUpperCase(); }); //Uppercase Generated array

for (let i = 0, container = document.getElementById("generated-array"); i < generatedArray.length; i++) { //Divides array to separate divs
     const data = generatedArray[i];
     const displayedDiv =
          `<option value="" selected disabled hidden>Choose here</option>
     <option class="specific-letter" onclick="click()">${data}</option>`;
     container.insertAdjacentHTML("beforeend", displayedDiv);
}

function click() {
     let letters = document.getElementsByClassName("specific-letter");
     for (let i = 0; i < letters.length; i++) {
          letters[i].addEventListener("click", clickDiv, false);
     }
}

function clickDiv() { //On click setting letter to variable
     let clickedDiv = this.innerHTML;
     let result = document.getElementById("arr");

     const startsWith = jsonData.filter(function (option) { // Finds a word in array which starts on clicked letter
          return option.name.startsWith(clickedDiv)
     });

     if (startsWith.length) {
          let myLetter = startsWith[0].name;
          result.innerHTML = myLetter;
     }
     else {
          result.innerHTML = "No matches found"
     }
}

click();

