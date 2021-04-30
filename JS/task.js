function generateArray(length) {
     const uniqueSet = new Set();
     while (uniqueSet.size < length) {
          const candidate = 97 + Math.floor(Math.random() * 26);
          uniqueSet.add(candidate);
     }
     return [...uniqueSet].map((x) => String.fromCharCode(x));
}

let generatedArray = generateArray(5);


for (let i = 0, container = document.getElementById("generated-array"); i < generatedArray.length; i++) {
     const data = generatedArray[i];
     const new_card = `<div>${data}</div>`;
     container.insertAdjacentHTML("beforeend", new_card);
}

