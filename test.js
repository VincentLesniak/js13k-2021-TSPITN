import {randFloatSpread, mapLinear, lerp} from './src/math.js';

let erreurs = 0;
let fichierResume = process.env.GITHUB_STEP_SUMMARY;
const test1 = randFloatSpread(1);
const test2 = randFloatSpread(1);
const test3 = mapLinear(1, 2, 3, 4, 5);
const test4 = mapLinear(1, 20, 3, 40, 5);
const test5 = lerp(1, 3, 20);
const test6 = lerp(1.3, -7, 2);


if (!(test1 <= 1)) {
  // cible la ligne du fichier de test
  console.log(`::error file=test.js,line=12::
    randFloatSpread(1) <= 1 a échoué. Résultat : ${test1}`);
  // cible le fichier source math.js à la ligne 10
  console.log(`::error file=src/math.js,line=10::
    erreur dans la fonction randFloatSpread`);
  // ajoute une erreur au compteur
  if (fichierResume) {
    //insère la ligne d'échec dans le rendu visuel
    fs.appendFileSync(fichierResume, `- ❌ randFloatSpread(1) <= 1 a échoué. Reçu : ${test1}\n`);
  }
  erreurs++;
}

if (!(test2 >= -1)) {
  console.log(`::error file=test.js,line=19::
    randFloatSpread(1) >= -1 a échoué. Résultat : ${test2}`);
  console.log(`::error file=src/math.js,line=10::
    la fonction randFloatSpread ne respecte pas la limite >= -1`);
    if (fichierResume) {
    fs.appendFileSync(fichierResume, `- ❌ randFloatSpread(1) >= -1 a échoué. Reçu : ${test2}\n`);
  }
  erreurs++;
}

if (test3 !== 3) {
  console.log(`::error file=test.js,line=26::
    mapLinear(1,2,3,4,5) a échoué. Attendu 3, reçu : ${test3}`);
  console.log(`::error file=src/math.js,line=5::
    le calcul de mapLinear est incorrect pour des entiers`);
  if (fichierResume) {
    fs.appendFileSync(fichierResume, `- ❌ mapLinear(1,2,3,4,5) a échoué. Reçu : ${test3}\n`);
  }
  erreurs++;
}

if (test4 !== 0.882352941176471) {
  console.log(`::error file=test.js,line=33::
    mapLinear(1,20,3,40,5) a échoué. Reçu : ${test4}`);
  console.log(`::error file=src/math.js,line=5::
    le résultat décimal de mapLinear est faux`);
  if (fichierResume) {
    fs.appendFileSync(fichierResume, `- ❌ mapLinear(1,20,3,40,5) a échoué. Reçu : ${test4}\n`);
  }
  erreurs++;
}

if (test5 !== 41) {
  console.log(`::error file=test.js,line=40::
    lerp(1,3,20) a échoué. Attendu 41, reçu : ${test5}`);
  console.log(`::error file=src/math.js,line=3::
    l'interpolation linéaire retourne une mauvaise valeur`);
  if (fichierResume) {
    fs.appendFileSync(fichierResume, `- ❌ lerp(1,3,20) a échoué. Attendu 41, reçu : ${test5}\n`);
  }
    erreurs++;
}

if (test6 !== -15.3) {
  console.log(`::error file=test.js,line=47::
    lerp(1.3,-7,2) a échoué. Attendu -15.3, reçu : ${test6}`);
  console.log(`::error file=src/math.js,line=3::
    problème avec lerp et les nombres négatifs`);
  if (fichierResume) {
    fs.appendFileSync(fichierResume, `- ❌ lerp(1.3,-7,2) a échoué. Reçu : ${test6}\n`);
  }
  erreurs++;
}

if (erreurs > 0) {
  process.exit(1);
} else {
  console.log('Tous les tests sont passés avec succès.');
  process.exit(0);
}
