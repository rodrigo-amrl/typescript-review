// ### Exercício 2 — Repositório genérico

// **Descrição:** implemente `Repository<T>` com métodos `add(item: T)`, `findById(id: number): T | undefined`, `all(): T[]`. Assuma que `T` tem `id: number` (use constraint).
interface ItemWithId {
    id: number;
}
class Repository<T extends ItemWithId> {
    private items: T[] = [];

    add(item: T): void {
        this.items.push(item);
    }
    findById(id: number): T | undefined {
        return this.items.find(item => item.id === id);
    }
    all(): T[] {
        return this.items;
    }
    deleteById(id: number): void {
        this.items = this.items.filter(item => item.id !== id);
    }
}

// Exemplos de uso:
interface User extends ItemWithId {
    name: string;
}

const userRepository = new Repository<User>();
userRepository.add({ id: 1, name: "Alice" });
userRepository.add({ id: 2, name: "Bob" });
console.log(userRepository.findById(1)); // { id: 1, name: "Alice" }
console.log(userRepository.all()); // [ { id: 1, name: "Alice" }, { id: 2, name: "Bob" } ]
userRepository.deleteById(1);
console.log(userRepository.all()); // [ { id: 2, name: "Bob" } ]