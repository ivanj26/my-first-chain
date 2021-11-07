import BlockChain from './blockchain';
import Block from './block';

const chain = new BlockChain();
chain.add(new Block(Date.now(), { amount: 1000 }));
chain.add(new Block(Date.now(), { amount: 1500 }));
chain.add(new Block(Date.now(), { amount: 2500 }));

console.log(JSON.stringify(chain.blocks(), null, 4));
console.log('Is blockchain valid? ' + chain.isValid());