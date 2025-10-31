"use strict";
// ### Exercício 1 — Identity genérico (rápido)
Object.defineProperty(exports, "__esModule", { value: true });
// **Descrição:** implemente `identity<T>(x: T): T`.
/**
 *  Identity genérico que retorna o mesmo valor que recebe.
 * @param x
 * @returns
 */
function identity(x) {
    return x;
}
// Exemplos de uso:
const num = identity(42);
const str = identity("Hello, TypeScript!");
console.log(num); // 42
console.log(str); // "Hello, TypeScript!"
//# sourceMappingURL=exercicio-1.js.map