import Block = require('./block');

class BlockChain {
    private chain : Block[];

    constructor() {
        this.chain = [this.createGenesisBlock()];
    }

    latestBlock() : Block {
        return this.chain[this.chain.length - 1];
    }

    add(block : Block) {
        block.index = this.latestBlock().index + 1;
        block.previousHash = this.latestBlock().hash;
        block.hash = block.generateHash();

        this.chain.push(block);
    }

    private createGenesisBlock() : Block {
        return new Block(Date.now(), { amount: 0 });
    }

    blocks() : Block[] {
        return this.chain;
    }

    isValid() : boolean {
        for (let $i = 1; $i < this.chain.length; $i++) {
            const currBlock = this.chain[$i];
            const prevBlock = this.chain[$i - 1];

            if (currBlock.previousHash !== prevBlock.hash) {
                return false;
            }

            if (currBlock.hash !== currBlock.generateHash()) {
                return false;
            }
        }

        return true;
    }
}

export = BlockChain;