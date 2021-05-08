let jsonData;
async function getFile() {  //Parsing JSON
     const res = await fetch('list.json');
     const data = await res.json();
     return data;
}

getFile().then(function (res) {
     jsonData = res;
}).catch(function (err) {
     console.log(err, 'err');
});

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
     <option value=${data}>${data}</option>`;
     container.insertAdjacentHTML("beforeend", displayedDiv);
}

let select = document.getElementById("generated-array")
select.addEventListener('change', clickDiv);

function clickDiv(event) { //On click setting letter to variable
     const lettter = event.target.value;

     let result = document.getElementById("arr");

     const startsWith = jsonData.find(function (option) {
          return option.name[0] == lettter;
     });
     const text = startsWith ? result.innerHTML = startsWith.name : "No matches found";
     result.innerHTML = text;
}