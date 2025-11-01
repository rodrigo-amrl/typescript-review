// ### Exercício 6 — Conditional Types com infer

// **Descrição:** implemente `UnwrapPromise<T>` que extrai o tipo interno se `T` for `Promise<...>`.


/**
 * Extrai o tipo interno de uma Promise. Se T for uma Promise<U>, retorna U; caso contrário, retorna T.
 * Ex: entrada: Promise<number> => saída: number
 */


type UnwrapPromise<T> = T extends Promise<infer U> ? U : T;
// Exemplos de teste:
type A = UnwrapPromise<Promise<number>>; // number
type B = UnwrapPromise<string>; // string


// Exemplos de uso:
async function getUser() {
  return { name: "Rodrigo", age: 32 };
}

type UserPromise = ReturnType<typeof getUser>; 
// Promise<{ name: string; age: number }>

type User = UnwrapPromise<UserPromise>; 
// { name: string; age: number }

const user: User = { name: "Rodrigo", age: 32 }; // ✅ tipo certo

console.log(user,typeof user.name);


// Explicação: Conditional types com `infer` permitem extrair tipos internos, útil para manipular tipos genéricos.