class Node {
    constructor(key, value) {
        this.key = key;
        this.value = value;
        this.prev = null;
        this.next = null;
    }
}

class LRUCache {
    /**
     * @param {number} capacity
     */
    constructor(capacity) {
        this.capacity = capacity;

        this.cache = new Map();

        // add dummy head tail
        this.head = new Node(-1, -1);
        this.tail = new Node(-1, -1);

        this.head.next = this.tail;
        this.tail.prev = this.head;
    }

    // to remove node from LL
    remove(node){
        node.prev.next = node.next;
        node.next.prev = node.prev;
    }

    // to insert at MRU
    insert(node){
        node.next = this.head.next;
        node.prev = this.head;

        this.head.next.prev = node;
        this.head.next = node;
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key) {
        // cache miss
        if(!this.cache.has(key)){
            return -1;
        }

        const node = this.cache.get(key);

        // move to MRU position
        this.remove(node);
        this.insert(node);

        return node.value;
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key, value) {
        // if key exists
        if(this.cache.has(key)){
            // update
            const node = this.cache.get(key);

            node.value = value;

            // move to MRU
            this.remove(node);
            this.insert(node);

            return;
        }

        const node = new Node(key, value);

        this.cache.set(key, node);
        this.insert(node);

        // check if capacity reached
        if(this.cache.size > this.capacity){
            const lru = this.tail.prev;

            this.remove(lru);
            this.cache.delete(lru.key);
        }
    }
}
