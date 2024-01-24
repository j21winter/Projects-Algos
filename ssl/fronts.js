class Node {
    constructor(data){
        this.data = data
        this.next = null
    }
}

class SSL {
    constructor(){
        this.head = null
    }
    addFront(val){
        let newNode = new Node(val)

        if(!this.head) {
            this.head = newNode
            return this
        }

        newNode.next = this.head

        this.head = newNode
        return this
    }

    removeFront() {
        if(this.head){
            let secondNode = this.head.next
            this.head.next = null
            this.head = secondNode
        } else {
            this.head = null
        }

        return this
    }

    front() {
        if(!this.head){
            return null
        }
        return this.head.data
    }
}

const ssl_1 = new SSL()

ssl_1
console.log(ssl_1)

ssl_1.removeFront()
console.log(ssl_1)

console.log(ssl_1.front())

