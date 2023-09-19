"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const crypto_1 = __importDefault(require("crypto"));
class Block {
    constructor(prevHash, height, data) {
        this.prevHash = prevHash;
        this.height = height;
        this.data = data;
        this.hash = Block.calculateHash(prevHash, height, data);
    }
    static calculateHash(prevHash, height, data) {
        const toHash = `${prevHash}${height}${data}`;
        return crypto_1.default.createHash("sha256").update(toHash).digest("hex");
    }
}
class Blockchain {
    constructor() {
        this.blocks = [];
    }
    getprevHash() {
        if (this.blocks.length === 0)
            return "";
        else
            return this.blocks[this.blocks.length - 1].hash;
    }
    addBlock(data) {
        const newblock = new Block(this.getprevHash(), this.blocks.length + 1, data);
        this.blocks.push(newblock);
    }
    getBlocks() {
        return [...this.blocks];
    }
}
const blockchain = new Blockchain();
blockchain.addBlock("first one");
blockchain.addBlock("second one");
blockchain.addBlock("third one");
blockchain.addBlock("last one");
blockchain.getBlocks().push(new Block("XXXX", 1111, "HACKEDDDDD"));
console.log(blockchain.getBlocks());
