import crypto from "crypto";   
//타입정의를 설명해야할 때 npm에서 설치하셈
// 타입스크립트로 블록체인 만들기
interface BlockShape{
    hash: string
    prevHash : string;
    height: number;
    data: string;
}
class Block implements BlockShape{
    public hash: string;
    constructor(
        public prevHash: string,
        public height: number,
        public data: string            
     ) {this.hash = Block.calculateHash(prevHash, height, data);
    }
    static calculateHash(prevHash: string, height: number, data: string){
        const toHash = `${prevHash}${height}${data}`;
        return crypto.createHash("sha256").update(toHash).digest("hex");
    }
}

class Blockchain {
    private blocks: Block[]
    constructor(){
        this.blocks = [];
    }
    private getprevHash(){
        if(this.blocks.length === 0) return ""
        else return this.blocks[this.blocks.length-1].hash;
    }
    public addBlock(data: string){
        const newblock = new Block(this.getprevHash(), this.blocks.length + 1, data)
        this.blocks.push(newblock);
    }
    public getBlocks(){
        return [...this.blocks];
    }
}

const blockchain = new Blockchain();

blockchain.addBlock("first one");
blockchain.addBlock("second one");
blockchain.addBlock("third one");
blockchain.addBlock("last one");

blockchain.getBlocks().push(new Block("XXXX", 1111, "HACKEDDDDD"));
console.log(blockchain.getBlocks())
