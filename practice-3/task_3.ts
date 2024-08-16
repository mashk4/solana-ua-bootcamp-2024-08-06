import 'dotenv/config';
import {
  Keypair,
  Connection,
  LAMPORTS_PER_SOL,
  PublicKey,
  clusterApiUrl
} from '@solana/web3.js';
import { airdropIfRequired } from "@solana-developers/helpers";


const connection = new Connection(clusterApiUrl('devnet'));
console.log('Connection established');

let privateKey = Uint8Array.from(JSON.parse(process.env['PRIVATE_KEY']));
let publicKey = new PublicKey(Keypair.fromSecretKey(privateKey).publicKey);

await airdropIfRequired(
  connection,
  publicKey,
  1 * LAMPORTS_PER_SOL,
  0.5 * LAMPORTS_PER_SOL
);

let balanceInLamports = await connection.getBalance(publicKey);

const balanceInSol = balanceInLamports / LAMPORTS_PER_SOL;

console.log(`Balance for the wallet ${publicKey} in Lamports is ${balanceInLamports} Lamports`);
console.log(`Balance for the wallet ${publicKey} in SOL is ${balanceInSol} SOL`);