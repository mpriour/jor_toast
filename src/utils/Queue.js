class Queue {
    items;
    constructor(items = []) {
        this.items = items;
    }
    enqueue(item) {
        const newItems = [...this.items];
        newItems.push(item);
        this.items = newItems;
        return this.items;
    }
    dequeue() {
        const newItems = [...this.items];
        newItems.shift();
        this.items = newItems;
        return this.items;
    }
    remove(id) {
        const newItems = this.items.filter((item) => item.id !== id);
        this.items = newItems;
        return this.items;
    }
    flush() {
        this.items = [];
        return this.items;
    }
}

export default Queue;
