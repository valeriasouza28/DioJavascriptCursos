//solução 1
/*
function verificaPalindromo(string) {
  // verificar se a string existe
  if (!string) return 'string inexistente'

  //--caso a string exista
  //--Vamos usar o split para separar todas as letras
  //--E o reverse é utilzado porque split retorna um array, e o reverse aqui é para colocar a a palavra ao contrario
  //-- E o join é para juntar todos os elementos do array e ele vai colocar todas as letras juntas
  return string.split('').reverse().join('') === string

  //-- Agora vamos ver se a string revertida é igual a string que você recebeu
}

let myVar = null
console.log(verificaPalindromo(myVar))
*/

//solução 2

function verificaPalindromo2(string) {
  if (!string) return 'string inexistente'

  //vamos percorrer apenas metade da string por isso / 2
  for (let i = 0; i < string.length / 2; i++) {
    if (string[i] !== string[string.length - 1 - i]) {
      return false
    }
  }
  return true
}

console.log(verificaPalindromo2('gato'))
