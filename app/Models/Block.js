'use strict'

const Model = use('Model')
const SHA256 = require("crypto-js/sha256")

class Block {

    constructor( index, timestamp, data, previousHash){
        this.index = index
        this.timestamp = timestamp
        this.data = data
        this.previousHash = previousHash
        this.hash = Block.calculateHash();
        this.nonce = 0
    }

    static calculateHash(){
        var hash = SHA256( this.index + this.previousHash + this.timestamp + JSON.stringify(this.data)+ this.nonce).toString();
        console.log(hash);
        return hash;
    }    

    
}

module.exports = Block
