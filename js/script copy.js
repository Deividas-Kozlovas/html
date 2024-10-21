
let numberOfPeople = addNumberGuests("Kiek bus sveciu?");

function addNumberGuests(text){
    let guests = prompt(text);
    if(isNaN(guests)){
        return addNumberGuests("Turi buti sakicius!!!");
    } 
    return guests;   
}

let blackList = ["Jonas", "Tomas"];

let names = [];

addGuests(numberOfPeople, names);
names = makeArrayToLoweCase(names);
blackList = makeArrayToLoweCase(blackList);


printGuests(names, blackList);

function addGuests(numberOfPeople, names) {
  for (let i = 0; i < numberOfPeople; i++) {
    let guestName = prompt("Svecio vardas?");
    names.push(guestName);
  }
}

function printGuests(names, blackList) {
  names.forEach((name) => {
    checkIfBlacklisted(name, blackList);
  });
}

function makeArrayToLoweCase(arrayString){
    arrayString = arrayString.map(function(value){
        return value.toLowerCase();
    });

    return arrayString;
}

function checkIfBlacklisted(name, blackList) {
  if (blackList.includes(name)) {
    console.log(name.charAt(0).toUpperCase() + name.slice(1) + " (blacklist)");
  } else {
    console.log(name.charAt(0).toUpperCase() + name.slice(1));
  }
}

