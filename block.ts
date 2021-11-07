import CryptoJS = require('crypto-js');

class Block {
    public index: number;
    public timestamp: number;
    public hash: string;
    public previousHash: string;
    private data: object;

    constructor(timestamp: number, data: object) {
        this.index = 0;
        this.data = data;
        this.timestamp = timestamp;
        this.hash = this.generateHash();
        this.previousHash = '0';
    }

    generateHash(): string {
        return CryptoJS
            .SHA256(this.index + this.previousHash + this.timestamp + this.data)
            .toString();
    }
}

export = Block;