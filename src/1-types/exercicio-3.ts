// ### Exercício 3 — SafeUser com Omit

// **Descrição:** dado `interface User { id:number; name:string; password:string }`, crie `SafeUser` sem `password` e função `sanitize`.
interface User {
    id: number;
    name: string;
    password: string;
}

type SafeUser = Omit<User, 'password'>;


function sanitize(user: User): SafeUser {
    const { password, ...safeUser } = user;
    return safeUser;
}

// Exemplos de uso:
const user: User = { id: 1, name: "Alice", password: "secret" };
console.log(user) // { id: 1, name: "Alice", password: "secret" }
const safeUser: SafeUser = sanitize(user);
console.log(safeUser); // { id: 1, name: "Alice" }