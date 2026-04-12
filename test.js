// importe la fonction depuis le fichier math.js
const { randFloatSpread } = require('./src/math.js');

// exécute la fonction avec le paramètre 1 et stocke le résultat
const resultat = randFloatSpread(1);

// vérifie si le résultat est bien inférieur ou égal à 1
if (resultat <= 1) {
  // affiche un message de réussite dans le terminal
  console.log('Test passed');
  // quitte le script
  process.exit(0);
} else {
  // affiche un message d'erreur dans le terminal
  console.error('Test Failed');
  // quitte le script
  process.exit(1);
}