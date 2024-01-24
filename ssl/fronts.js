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

    max(){
        if(!this.head){
            return null
        }

        let runner = this.head
        let max = this.head.data

        while(runner){
            if(runner.data > max){
                max = runner.data
            }
            runner = runner.next
        }
        return max
    }

    min(){
        if(!this.head){
            return null
        }

        let runner = this.head
        let min = this.head.data

        while(runner){
            if(runner.data < min){
                min = runner.data
            }
            runner = runner.next
        }
        return min
    }

    average(){
        if(!this.head){
            return null
        }

        let sum = 0
        let itemCount = 0
        let runner = this.head

        while(runner){
            sum += runner.data
            itemCount ++
            runner = runner.next
        }

        return sum / itemCount
    }
}

const ssl_1 = new SSL()

ssl_1.addFront(12).addFront(1).addFront(4)
console.log(ssl_1.max())
console.log(ssl_1.min())
console.log(ssl_1.average())

