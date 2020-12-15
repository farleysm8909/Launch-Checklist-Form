// Write your JavaScript code here!
window.addEventListener("load", function() {
   let missionTarget = document.getElementById("missionTarget");
   fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response) {
      response.json().then(function(json) {
         let index = 0;
         let data = json[index];
         missionTarget.innerHTML = `
         <h2>Mission Destination</h2>
         <ol>
            <li>Name: ${data.name}</li>
            <li>Diameter: ${data.diameter}</li>
            <li>Star: ${data.star}</li>
            <li>Distance from Earth: ${data.distance}</li>
            <li>Number of Moons: ${data.moons}</li>
         </ol>
         <img src="${data.image}">
         `;
      });
   });
   let form = document.querySelector("form");
   form.addEventListener("submit", function(event){
      event.preventDefault();
      let pilotName = document.getElementById("pilotName");
      let copilotName = document.getElementById("copilotName");
      let fuelLevel = document.getElementById("fuelLevel");
      let cargoMass = document.getElementById("cargoMass");
      let stringRegex = /^[a-zA-Z]+$/;

      let faultyItems = document.getElementById("faultyItems");
      let pilotStatus = document.getElementById("pilotStatus");
      let copilotStatus = document.getElementById("copilotStatus");
      let fuelStatus = document.getElementById("fuelStatus");
      let cargoStatus = document.getElementById("cargoStatus");
      let launchStatus = document.getElementById("launchStatus");

      if (pilotName.value.length < 1 || copilotName.value.length < 1 || fuelLevel.value === "" || cargoMass.value === "") {
         alert("All fields are required!");
         // event.preventDefault();
      } else if (!pilotName.value.match(stringRegex) || !copilotName.value.match(stringRegex) || isNaN(fuelLevel.value) || isNaN(cargoMass.value)) { 
         alert("Please enter valid input");
         // event.preventDefault();
      } else {
         faultyItems.style.visibility = "visible";
         pilotStatus.innerHTML = `Pilot ${pilotName.value} is ready for launch.`;
         copilotStatus.innerHTML = `Co-Pilot ${copilotName.value} is ready for launch.`;
         if (fuelLevel.value < 10000) {
            fuelStatus.innerHTML = `Fuel level too low for journey.`;
            launchStatus.style.color = "red";
            launchStatus.innerHTML = `Shuttle not ready for launch`;
         }
         if (cargoMass.value > 10000) {
            cargoStatus.innerHTML = `Too much mass for launch.`;
            launchStatus.style.color = "red";
            launchStatus.innerHTML = `Shuttle not ready for launch`;
         }
         if (cargoMass.value < 10000 && fuelLevel.value > 10000) {
            launchStatus.innerHTML = `Shuttle is ready for launch`;
            launchStatus.style.color = "green";
         }
      }
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
});

