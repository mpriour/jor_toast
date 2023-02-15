class Queue{
    items;
    constructor(items = []){
        this.items = items;
    }
    enqueue(item){
        const newItems = [...this.items];
        newItems.push(item);
        this.items = newItems;
        return this.items;
    }
    dequeue(){
        const newItems = [...this.items];
        newItems.shift();
        this.items = newItems;
        return this.items;
    }
    remove(index=0){
        const newItems = [...this.items];
        newItems.splice(index, 1);
        this.items = newItems;
        return this.items;
    }
    flush(){
        this.items = [];
        return this.items;
    }
}

export default Queue;
