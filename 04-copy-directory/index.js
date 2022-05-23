const fs = require('fs');
const path = require('path');
/*создаем новую папку*/
fs.mkdir(path.join(__dirname, 'files-copy'),{recursive: true}, err => {
    if (err) throw err;
    console.log('Папка была создана'); 
    {recursive:true};
});
/*читаем файлы из старой папки*/
const ans = path.join(__dirname, 'files');

fs.readdir(ans, {withFileTypes: true}, (err, files) => {
    if (err) console.log(err)
                         /* создаем новые файлы*/

        files.forEach(file => {
            if (file.isFile()) {
           /*сначала читаем каждый файл из старой папки*/
               fs.readFile(
                path.join(__dirname, 'files', `${file.name.split('.')[0]}.${path.extname(file.name).slice(1)}`),
                'utf-8',
                 (err, data) => {
                 if (err) console.log(err);                 
         
                   /*и сразу же пишем в новую папку*/

                      fs.writeFile(
                             path.join(__dirname, 'files-copy', `${file.name.split('.')[0]}.${path.extname(file.name).slice(1)}`),
                             data,
                             (err) => {
                             if (err) console.log(err);
                             console.log(`Файл ${file.name.split('.')[0]}.${path.extname(file.name).slice(1)} был создан`);
                              }
                            );
                 }
                );
            }   
         }
        );
})
