// ### Exercício 8 — Build a typed event emitter (intermediário)


// **Descrição:** crie uma classe `TypedEmitter<Events>` onde `Events` é um mapa como `{ login: (user:User) => void }`. Implemente `on<K extends keyof Events>(event:K, handler:Events[K])`.

type Handler = (...args: any[]) => void;


// Classe que implementa um emissor de eventos tipado.
class TypedEmitter<Events extends Record<string, Handler>> {
  private handlers: Partial<{ [K in keyof Events]: Events[K][] }> = {};
  on<K extends keyof Events>(event: K, fn: Events[K]) {
    const arr = this.handlers[event] as Events[K][] | undefined;
    if (!arr) this.handlers[event] = [fn];
    else arr.push(fn);
  }
  emit<K extends keyof Events>(event: K, ...args: Parameters<Events[K]>) {
    const arr = this.handlers[event] as Events[K][] | undefined;
    arr?.forEach(h => (h as any)(...args));
  }
}

// Exemplo de uso:
type MyEvents = {
  login: (user: { id: number; name: string }) => void;
  logout: () => void;
};

const emitter = new TypedEmitter<MyEvents>();

emitter.on("login", (user) => {
  console.log(`User logged in: ${user.name}`);
});
emitter.on("logout", () => {
  console.log("User logged out");
});

emitter.emit("login", { id: 1, name: "Alice" });
emitter.emit("logout");