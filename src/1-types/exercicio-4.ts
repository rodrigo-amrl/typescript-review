// ### Exercício 4 — Type Guards customizados

// **Descrição:** crie `isError(obj: any): obj is Error` que detecta se é `Error`.

/**
 * Retorna se o objeto é uma instância de Error.
 * @param obj 
 * @returns 
 */
function isError(obj: any): obj is Error {
    return obj instanceof Error;
}

// Exemplos de uso:
const maybeError1: any = new Error("This is an error");
const maybeError2: any = { message: "Not an error" };

if (isError(maybeError1)) {
    console.log("maybeError1 é um Error com mensagem:", maybeError1.message);
}
if (isError(maybeError2)) {
    console.log("maybeError2 é um Error com mensagem:", maybeError2.message);
}