const fs = require('fs');

const path = require('path');

const ans = path.join(__dirname, 'secret-folder');

fs.readdir(ans, {withFileTypes: true}, (err, files) => {
    if (err) console.log(err);
         
     files.forEach(file=>{
        if (file.isFile()) {
         fs.stat(path.join(ans,file.name),(err,stats)=>{
           if (err) console.log(err);
           console.log (`${file.name.split('.')[0]} - ${path.extname(file.name).slice(1)} - ${(stats.size/1024).toFixed(3)} kb`);
         
         });
        }
        });
    });