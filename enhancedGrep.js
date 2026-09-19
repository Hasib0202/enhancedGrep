const fs = require('fs');
const path = require('path');

const filename = process.argv[2];
const searchWord = process.argv[3];

if (!filename || !searchWord) {
    console.log('Usage: node enhancedGrep.js <filename> <word>');
    process.exit();
}




const content = fs.readFileSync(filename, 'utf8');

const lines = content.split('\n');

let matchCount = 0;
for (let i = 0; i < lines.length; i++) {
    if (lines[i].includes(searchWord)) {
        console.log(lines[i]);
        matchCount++;
    }
}
console.log('Number of matches: ' + matchCount);

