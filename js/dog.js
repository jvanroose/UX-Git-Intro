/*let dog = {
    name: "Derek",
    numOfLegs: 4,
    breed: "Shiba Inu"
};

let dogDiv = document.getElementById("dog-info");

dogDiv.innerText = 
  "Name: " + dog.name + "\n" +
  "Number of Legs: " + dog.numOfLegs + "\n" + 
  "Breed: " + dog.breed
;*/

$(document).ready(function(){
    let wolf = new Wolf("canis", "lupus", false, "grey", 32);

    $("#shiba-inu-picture").click(function(){
        $(this).animate({
            height: 300
        }, 1000).animate({
            width:100
        });
    });
});

//James stop leaving console logs in our release code!
