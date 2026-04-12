// importe la fonction depuis le fichier math.js
import { randFloatSpread } from './src/math.js';

// exécute la fonction avec le paramètre 1 et stocke le résultat
const resultat = randFloatSpread(1);

if (resultat <= 1) {
  console.log('Test passed');
  process.exit(0);
} else {
  console.error('Test Failed');
  process.exit(1);
}