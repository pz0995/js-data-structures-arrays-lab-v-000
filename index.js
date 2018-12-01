const drivers = ["Milo", "Otis", "Garfield"];

function destructivelyAppendDriver() {
  drivers.push("Ralph");
}

function destructivelyPrependDriver() {
  drivers.unshift("Bob");
}

function destructivelyRemoveLastDriver() {
  drivers.pop("Otis");
}

function destructivelyRemoveFirstDriver() {
  drivers.shift("Milo");
}

function appendDriver() {
  drivers[drivers.length] = "Broom";
}

function prependDriver() {
  drivers[0] = "Arnold";
}

function removeLastDriver() {
  drivers.slice(3, 4);
}

function removeFirstDriver() {
  drivers.slice(0, 2);
}
