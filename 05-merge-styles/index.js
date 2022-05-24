const fs = require('fs');
const path = require('path');
/*создаем новый файл*/
fs.writeFile(
    path.join(__dirname, 'project-dist', 'bundle.css'),
    '',
    (err) => {
        if (err) throw err;
        console.log('Файл был создан');
    }
);
/*читаем файлы из старой папки*/
const ans = path.join(__dirname, 'styles');

fs.readdir(ans, {withFileTypes: true}, (err, files) => {
    if (err) console.log(err)
                         /* создаем новые файлы*/

                         files.forEach(file => {
                            if ((file.isFile()) && (path.extname(file.name).slice(1) =='css')) {
                           /*сначала читаем каждый файл из старой папки*/
                              fs.readFile(
                                path.join(__dirname, 'styles', `${file.name.split('.')[0]}.${path.extname(file.name).slice(1)}`),
                                'utf-8',
                                 (err, data) => {
                                 if (err) console.log(err);  

                                 /*и сразу же пишем в ранее созданный файл*/
                                fs.appendFile(
                                    path.join(__dirname, 'project-dist', 'bundle.css'),
                                    data,
                                    err => {
                                        if (err) throw err;
                                        console.log('Информация была добавлена в файл');
                                    }
                                );

                            }
                            );
                        
                        }   
                     }
                    );
            })






                      

              
