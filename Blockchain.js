'use strict'

const Block = require('./Block.js')

class Transaction{
    constructor( fromAddress, toAddress, amount) {
        this.toAddress = toAddress;
        this.fromAddress = fromAddress;
        this.amount = amount;
    }

}

class Blockchain {
    
    constructor(){
        // create chain transactions

        // Create function for the genesis Block
        // Mining Genesis Block
        this.chain = [this.createGenesisBlock()];
        this.difficulty = 2;
        this.pendingTransactions = [];
        this.miningReward = 100;
    
        console.log("Initilized Block Success")

    }

    createGenesisBlock(){
        return new Block( "01/01/2018", "Genesis block", "0");
    }
    getLatestBlock(){ // return the last block }
        return this.chain[ this.chain.length - 1]
    }
    // Miners can pick the transactions
    minePendingTransactions(miningRewardAddress){
        // Create new block with all pending transactions and mine it..
        let block = new Block( Date.now(), this.pendingTransactions);
        block.mineBlock(this.difficulty);

        console.log("Block successfully mined !");
        this.chain.push( block );

        this.pendingTransactions = [
            new Transaction( null, miningRewardAddress, this.miningReward)
        ];

    }

    // Calculating the Address
    createTransaction( transaction){
        this.pendingTransactions.push(transaction);
    }

    getBalanceOfAddress( address ){
        let balance = 0;
        for( const block of this.chain) {
            for( const trans of block.transactions){    
                // Searching of the address of the user
                // Increase the balance
                if( trans.fromAddress === address){
                    balance -=  trans.amount;
                }
                // Increase the balance
                if ( trans.toAddress === address) {
                    balance += trans.amount
                }
            }
        }
        return balance;
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

//console.log( JSON.stringify(BlockchainObj, null, 4));
