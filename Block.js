'use strict'

const SHA256 = require("crypto-js/sha256")

class Block {

    constructor( index, timestamp, data, previousHash){
        this.index = index
        this.timestamp = timestamp
        this.data = data
        this.previousHash = previousHash
        this.hash = this.calculateHash();
        // Random value
        this.nonce = 0
    }

     calculateHash(){
        var hash = SHA256( this.index + this.previousHash + this.timestamp + JSON.stringify(this.data)+ this.nonce).toString();
        return hash;
    }    

    /**
     * Proof of Work Implementation 
     * 
     * To avoid the spam DDOS Attack
     * 
     * @param {*} difficulty 
     */
    mineBlock(difficulty){
        // Calculate until there is a zero in the hash
        while( this.hash.substring(0, difficulty) !== Array(difficulty + 1).join("0")){
            this.nonce++;
            this.hash  = this.calculateHash();
        }
        console.log("Number of try" + this.nonce)
        console.log("Block mined:" + this.hash);
    }

    
}

module.exports = Block
