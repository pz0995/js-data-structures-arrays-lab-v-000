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
  const newDriver = "Ralph";
  const newArray = drivers.concat(newDriver);
}

function prependDriver() {
  // drivers[drivers.length - 1] = "Broom";
  const newDriver = "Broom";
  const newArray = drivers.concat(newDriver);
}

function removeLastDriver() {
  let r = drivers.slice(0, 2);
}

function removeFirstDriver() {
  let t = drivers.slice(1);
}
