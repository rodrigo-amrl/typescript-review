export interface HasId { id: number }

export class Repository<T extends HasId> {
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
    remove(id: number): void {
        this.items = this.items.filter(item => item.id !== id);

    }
}