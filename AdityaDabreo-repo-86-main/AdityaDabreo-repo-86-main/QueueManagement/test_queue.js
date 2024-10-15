class Node {
    
    constructor(value) {
      this.value = value;
      this.next = null;
    }
}

class Queue {
 
    constructor() {
      this.front = null;
      this.rear = null;
      this.size = 0;
    }
  
  
    enqueue(value) {
      const node = new Node(value);
      if (this.rear === null) {
        this.front = node;
        this.rear = node;
      } else {
        this.rear.next = node;
        this.rear = node;
      }
      this.size++;
    }
  
   
    dequeue() {
      if (this.front === null) {
        return null;
      }
      const value = this.front.value;
      this.front = this.front.next;
      if (this.front === null) {
        this.rear = null;
      }
      this.size--;
      return value;
    }
  
    
    peek() {
      return this.front === null ? null : this.front.value;
    }
  
  
    isEmpty() {
      return this.front === null;
    }
  
  
    getSize() {
      return this.size;
    }
}

const queue = new Queue()

queue.enqueue(10)
queue.enqueue(20)
queue.enqueue(30)
console.log(queue.dequeue())
console.log(queue.peek())
console.log(queue.isEmpty())
console.log(queue.getSize())