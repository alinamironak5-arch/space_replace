const fs = require('fs');
const data = fs.readFileSync(
    'book.txt',
    {
        encoding: 'utf8',
        flag: 'r'
    }
);

console.log(data.replaceAll(" ", " 💫Алінаааа✨ "));
