'use strict'

const Block = use('App/Models/Block')
const Model = use('Model')


class Blockchain extends Model{
    static _bootIfNotBooted () {
        if (this.name !== 'MyModel') {
          super._bootIfNotBooted()
        }
      }

    constructor(){
        super()
        // create chain transactions

        // Create function for the genesis Block
        // Mining Genesis Block
        var newBlock =  Blockchain.genesisBlock();
        this.chain = [newBlock];
        this.current_transactions = []

        // Binding of this

        this.newBlock = this.newBlock("123", "123")
        this.newTransactions = this.newTransactions()
        this.lastBlock = this.lastBlock()
        //this.proofOfWork = this.proofOfWork.bind(this)
        console.log("Initilized Block Success")

    }

    static genesisBlock(){

        var NewBlock = new Block(0, "01/01/2018", "Genesis block", "0");
        console.log(NewBlock);
        return NewBlock;
    }
    
    newBlock(proof, previousHash){
        const block = {
            index: this.chain.length + 1,
            timestamp: new Date().toString(),
            transactions: this.current_transactions,
            proof: proof,
            previous_hash:  previousHash
        }
        this.current_transactions = [],
        this.chain.push(block)
    }

      newTransactions(sender, recipient, amount){

        this.current_transactions.push({
            sender: sender,
            recipient: recipient,
            amount: amount
        })
        console.log("New transactions", this.current_transactions)
        return this.lastBlock('index') + 1

    }
    
    lastBlock(){ // return the last block }
        return this.chain.slice(-1)[0]
    }

}

module.exports = Blockchain
