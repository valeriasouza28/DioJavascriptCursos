/** A estrutura de um objeto é declarado com o nome do objeto um sinal de igual e abre chaves, e o conteúdo do objeto possui a estrutura de chave e valor
 *
 * let nomeDoObjeto = {
 * chave: "valor",
 * 2: "valor2"
 * }
 */

//cria objeto
let person = {
  name: 'Julia',
  age: 20,
  adress: 'Rua 2'
}

/** Para acessar o conteúdo do objeto eu coloco
 *
 * nomeDoObjeto.nomeDaChave
 */
console.log(person.name)

//outra forma de acessar é
console.log(typeof person['age'])
