const request = new XMLHttpRequest();
request.open("GET", "list.json", false);
request.send(null);
const jsonData = JSON.parse(request.responseText)

let generateArray = (length = 5) => {
     return [...'abcdefghijklmnopqrstuvwxyz'].sort(() => Math.random() - 0.5).splice(0, length);
}

let generatedArray = generateArray();

for (let i = 0, container = document.getElementById("generated-array"); i < generatedArray.length; i++) {
     const data = generatedArray[i];
     const displayedDiv = `<div>${data}</div>`;
     container.insertAdjacentHTML("beforeend", displayedDiv);
}

console.log(jsonData);