// Add your functions and code here
var destructivelyAppendKitten = (name) => {
  kittens.push(name);
}

var destructivelyPrependKitten = ( name ) => {
  kittens.unshift(name);
}

var destructivelyRemoveLastKitten = () => {
  kittens.pop();
}

var destructivelyRemoveFirstKitten =  () => {
  kittens.shift();
}

var appendKitten = ( name ) => {
  return [...kittens, name]

}

var prependKitten = (name) => {
  return [name , ...kittens]
}
