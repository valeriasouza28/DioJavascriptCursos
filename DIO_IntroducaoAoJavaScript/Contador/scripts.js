//Esse é  o meu span no html
var currentNumberWrapper = document.getElementById('currentNumber')
//currentNumber no html
var currentNumber = 0

function increment() {
  currentNumber = currentNumber + 1
  currentNumberWrapper.innerHTML = currentNumber
}

function decrement() {
  currentNumber = currentNumber - 1
  currentNumberWrapper.innerHTML = currentNumber
}
