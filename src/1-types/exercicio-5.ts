// ### Exercício 5 — Mapped Types básico

// **Descrição:** a partir de `type T = { a:number; b:string }`, crie `Nullable<T>` que torna todas chaves `T | null`.



/**
 * Torna todas as propriedades de um tipo T como opcionais e permite que sejam nulas.
 * Ex: entrada: { a: number; b: string } => saída: { a: number | null; b: string | null }
 */
type Nullable<T> = {
    [K in keyof T]: T[K] | null;
};

// Exemplos de uso:
type T = { a: number; b: string };
type NullableT = Nullable<T>;

const obj: NullableT = { a: null, b: "hello" };
console.log('asdf')
console.log(obj); // { a: null, b: "hello" }

// Explicação: Mapped types iteram sobre chaves e transformam tipos, útil para DTOs parciais.