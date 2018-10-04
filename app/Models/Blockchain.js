'use strict'

const Model = use('Model')

class Blockchain extends Model {

    

    constructor(){

        // create chain transactions

        this.chain = []
        this.current_transactions = []

        // Binding of this

        this.newBlock = this.newBlock.bind(this);
        this.newTransactions = this.newTransactions.bind(this)
        this.lastBlock = this.lastBlock.bind(this)
        this.proofOfWork = this.proofOfWork.bind(this)


    }

    newBlock(){

    }

    newTransactions(){

    }

    hash(){

    }

    lastBlock(){ // return the last block }





}

module.exports = Blockchain
