const fs = require('fs');

//Almost all methods from fs module will have both async 
//sync mode.

const files = fs.readdirSync('./');
//console.log(files);

fs.readdir('./', function(err, files){
    if (err)
        console.log('Error', err);
    else
        console.log('Result', files);
});

fs.readdir('$', function(err, files){
    if (err)
        console.log('Error', err);
    else
        console.log('Result', files);
});