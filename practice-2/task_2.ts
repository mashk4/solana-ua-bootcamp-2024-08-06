import 'dotenv/config';
import { Keypair } from '@solana/web3.js';

let privateKey = process.env.PRIVATE_KEY;
if (privateKey === undefined) {
  console.log('Add PRIVATE_KEY to .env file');
  process.exit(1);
}

const asArray = Uint8Array.from(JSON.parse(privateKey));
export const keypair = Keypair.fromSecretKey(asArray);

console.log(`Public key: ${keypair.publicKey.toBase58()}`);
