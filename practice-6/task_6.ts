import 'dotenv/config';
import { Keypair,  } from '@solana/web3.js';

let tries = 0;
while (true) {
  let keypair = Keypair.generate();
  let publicKey = keypair.publicKey.toBase58();

  if (publicKey.toLowerCase().startsWith('anza') === true) {
    console.log(`Found public key that starts with "anza": ${publicKey}`);
    break;
  }

  tries++;
  console.log(`Tries: ${tries}`);
}

