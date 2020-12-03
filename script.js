// Write your JavaScript code here!
window.addEventListener("load", function() {
   let form = document.querySelector("form");
   form.addEventListener("submit", function(event){
      event.preventDefault();
      let pilotName = document.getElementById("pilotName");
      let copilotName = document.getElementById("copilotName");
      let fuelLevel = document.getElementById("fuelLevel");
      let cargoMass = document.getElementById("cargoMass");
      let stringRegex = /^[a-zA-Z]+$/;
      if (pilotName.value.length < 1 || copilotName.value.length < 1 || fuelLevel.value === "" || cargoMass.value === "") {
         alert("All fields are required!");
         // event.preventDefault();
      } else if (!pilotName.value.match(stringRegex) || !copilotName.value.match(stringRegex) || isNaN(fuelLevel.value) || isNaN(cargoMass.value)) { 
         alert("Please enter valid input");
         // event.preventDefault();
      } else {
         alert("else");
      }
   });
});
/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/
