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

    contains(val){ 
        if(!this.head){
            return false;
        }

        let runner = this.head

        while (runner != null){
            if(runner.data == val){
                return true
            } else {
                runner = runner.next
            }
        }

        return false
    }

    length(){
        if(!this.head){
            return 0;
        }

        let runner = this.head
        let count = 1

        while (runner.next){
            runner = runner.next
            count ++
        }

        return count
    }

    display(){
        if(!this.head){
            return null
        }
        
        const values = []
        let runner = this.head

        while(runner){
            values.unshift(runner.data)
            runner = runner.next
        }

        return values.join(',')
    }
}

const ssl_1 = new SSL()



