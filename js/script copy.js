let numberOfPeople = prompt("Kiek bus sveciu?");
numberOfPeople = parseInt(numberOfPeople);

const blackList = ["Jonas", "Tomas"];

let names = [];

addGuests(numberOfPeople, names);
names = makeArrayToLoweCase(names);
makeArrayToLoweCase(blackList);

console.log(names);

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
    console.log(name + " (blacklist)");
  } else {
    console.log(name);
  }
}

