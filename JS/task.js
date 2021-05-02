const request = new XMLHttpRequest();
request.open("GET", "list.json", false);
request.send(null);
const jsonData = JSON.parse(request.responseText);

let generateArray = (length = 5) => {
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

let click = () => {
     let letters = document.getElementsByClassName("specific-letter");
     let result = document.getElementById("names");

     for (let i = 0; i < letters.length; i++) {
          letters[i].addEventListener("click", () => {
               result.innerHTML = jsonData[1].name
          }, false);
     }
}

click();


// let generateArray = (length = 5) => {  //Function which generates array of random unique letter
//      return [...'abcdefghijklmnopqrstuvwxyz'].sort(() => Math.random() - 0.5).splice(0, length);
// }