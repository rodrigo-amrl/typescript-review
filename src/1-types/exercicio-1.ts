// ### Exercício 1 — Identity genérico (rápido)

// **Descrição:** implemente `identity<T>(x: T): T`.



/**
 *  Identity genérico que retorna o mesmo valor que recebe.
 * @param x 
 * @returns 
 */
function identity<T>(x: T): T {
    return x;
}

// Exemplos de uso:
const num: number = identity(42);
const str: string = identity("Hello, TypeScript!");

console.log(`Value: ${num}  Type:${typeof num}`); // 42
console.log(`Value:${str} Type:${typeof str}`); // "Hello, TypeScript!"