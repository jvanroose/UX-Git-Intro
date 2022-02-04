console.log("Hello my code is working");

function buttonClick() {
    let inputElement = document.getElementById("input1");
    let paragraphElement = document.getElementById("para");
    paragraphElement.innerText = inputElement.value;
}


//Resizes image based on values in width and height inputs.
function imageButtonClicked(image) {
    let width = document.getElementById("width").value;
    let height = document.getElementById("height").value;

    image.width = width;
    image.height = height;
}

let namesArray = [
    "David",
    "Charles",
    "Charlotte",
    "Craig",
    "Frank",
    "Steve",
    "Chris"
];

function startsWithC(string) {
    if(string[0] === "C") {
        addNameToTable(string);
    }
}

function addNameToTable(string) {
    let table = document.getElementById("nameTable");

    table.innerHTML = table.innerHTML + 
    "<tr><td>" + string + "</td></tr>"
}

for(let i = 0; i < namesArray.length; i++) {
    startsWithC(namesArray[i]);
}