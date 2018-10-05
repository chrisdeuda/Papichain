'use strict'

const SHA256 = require("crypto-js/sha256")

class Block {

    constructor(timestamp, transactions, previousHash){
        this.timestamp = timestamp
        this.transactions = transactions
        this.previousHash = previousHash
        this.hash = this.calculateHash();
        // Random value
        this.nonce = 0
    }

     calculateHash(){
        return SHA256(  this.previousHash +
            this.timestamp + 
            JSON.stringify(this.transactions) +
            this.nonce
        ).toString();
    }    

    /**
     * Proof of Work Implementation 
     * 
     * To avoid the spam DDOS Attack
     * 
     * @param {*} difficulty 
     */
    mineBlock(difficulty){
        console.log("Trying to calcualate")
        // Calculate until there is a zero in the hash
        while (this.hash.substring(0, difficulty) !== Array(difficulty + 1).join("0")) {
            this.nonce++;
            this.hash = this.calculateHash();
        }

        console.log("BLOCK MINED: " + this.hash);
    }

    
}

module.exports = Block
