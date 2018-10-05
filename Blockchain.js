'use strict'

const Block = require('./Block.js')

class Blockchain {
    
    constructor(){
        // create chain transactions

        // Create function for the genesis Block
        // Mining Genesis Block
        this.chain = [this.createGenesisBlock()];
        this.difficulty = 4;
    
        console.log("Initilized Block Success")

    }

    createGenesisBlock(){
        return new Block(0, "01/01/2018", "Genesis block", "0");
    }
    getLatestBlock(){ // return the last block }
        return this.chain[ this.chain.length - 1]
    }
    addBlock(newBlock){
        newBlock.previousHash = this.getLatestBlock().hash;
        newBlock.mineBlock( this.difficulty);
        this.chain.push(newBlock);


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
        return this.getLatestBlock('index') + 1;
    }

    isChainValid(){
        for( let index = 1; index <this.chain.length; index++){
            const currentBlock = this.chain[index];
            const previousBlock = this.chain[index - 1];

            // Check if the hash still valid
            if ( currentBlock.hash !== currentBlock.calculateHash()) {
                return false;
            }
            // Check if current block set to previous block hash
            if ( currentBlock.previousHash !== previousBlock.hash )  {
                return false;
            }
        }
        return true;

    }

}

module.exports = Blockchain


var BlockchainObj  = new Blockchain();

console.log("Mining block 1...")
BlockchainObj.addBlock( new Block (1, "10/07/2017", {amount: 4}));

console.log("Mining block 2...")
BlockchainObj.addBlock( new Block (2, "10/07/2037", {amount: 10}));


//console.log( JSON.stringify(BlockchainObj, null, 4));
