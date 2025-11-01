// ### Exercício 7 — Keyof e Indexed Access

// **Descrição:** crie função `getProp<T, K extends keyof T>(obj: T, key: K): T[K]`.


/**
 * Obtém o valor da propriedade especificada de um objeto.
 * @param obj 
 * @param key 
 * @returns 
 */
function getProp<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

// Exemplos de uso:
const person = { name: "Alice", age: 30, isEmployed: true };
const name = getProp(person, "name"); // Tipo inferido como string
const age = getProp(person, "age");
const isEmployed = getProp(person, "isEmployed");

console.log(name);
console.log(age);

console.log(isEmployed);

// Explicação: `keyof T` obtém as chaves de T, e `T[K]` acessa o tipo da propriedade K em T.