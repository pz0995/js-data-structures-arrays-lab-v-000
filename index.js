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
  let newDriver = "Ralph";
  var newArray = drivers.concat(newDriver);
}

function prependDriver() {
  // drivers[drivers.length - 1] = "Broom";
  let newDriver = "Broom";
  var newArray = drivers.concat(newDriver);
}

function removeLastDriver() {
  var last = drivers.slice(0, 2);
}

function removeFirstDriver() {
  var first = drivers.slice(1);
}
