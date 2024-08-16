import 'dotenv/config';
import { Keypair } from '@solana/web3.js';

let keypair = Keypair.generate();

console.log(`Private key: ${keypair.secretKey}`);
console.log(`Public key: ${keypair.publicKey.toBase58()}`);
