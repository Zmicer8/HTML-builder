const fs = require('fs');
const path = require('path');

fs.writeFile(
    path.join(__dirname, 'write2.txt'),
    '',
    (err) => {
        if (err) throw err;
        console.log('Набери текст');
    }
);
const { stdin,stdout,exit} = process;
stdin.on('data', (data) => {
  if (data.toString().trim()== 'exit') exit()
  fs.appendFile(
    path.join(__dirname, 'write2.txt'),
    data,
    err => {
        if (err) throw err;
        console.log('Файл был изменен');
    }
)
}
);
process.on('SIGINT',exit);
process.on('exit', () => stdout.write('Удачи в изучении Node.js!')/* process.exit()*/);
/**/