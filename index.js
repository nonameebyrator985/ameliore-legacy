const fs = require('fs');
const path = require('path');

const analyzeCode = (directory) => {
    // Code d'analyse statique va ici
    console.log(`Analyse du code dans: ${directory}`);
};

const main = () => {
    const directory = process.argv[2];
    if (!directory) {
        console.error('Veuillez fournir le chemin du dossier contenant le code hérité.');
        process.exit(1);
    }
    analyzeCode(directory);
};

main();