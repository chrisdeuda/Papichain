'use strict'

const BlockChain = use('App/Models/Blockchain')

class BlockchainController {
    async init ({request, response}) {
        //var BlockChainObj = new BlockChain();
        //
        var newBlock = await BlockChain.newTransactions( request.input('sender'), request.input('recipient'), request.input('amount'));
        console.log(BlockChainObj.newTransactions)

        return response.json(BlockChainObj )
    }

    async create({request, response}) {

        let NewChain = new BlockChain();
        
        
        return response.json(newBlock )
    }
}

module.exports = BlockchainController
