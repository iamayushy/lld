class LRU {
    constructor (capacity) {
        this.capacity = capacity;
        this.store = new Map();
    }
    get (key) {
        if (!this.store.has(key)) return -1;
        const value = this.store.get(key);
        this.store.delete(key);
        this.store.set(key, value);
        return value;
    }
    put (key, value) {
        if (this.store.has(key)) {
            this.store.delete(key)
        }
        else if (this.store.size >= this.capacity) {
            const lrKey = this.store.keys().next().value;
            this.store.delete(lrKey);
        }
        this.store.set(key, value);
    }
}
const store = new LRU(2);
store.put("a", 12);
store.get("a")
store.put("b", 23);
store.get("a")
store.put("c", 23);
console.log(store);

console.log(store.get("b"))