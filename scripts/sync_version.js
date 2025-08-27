const fs = require('fs');

const pkg = JSON.parse(fs.readFileSync('package.json', 'utf8'));
const version = pkg.version;

fs.writeFileSync('VERSION', version);
console.log(`Updated VERSION to ${version}.`);
