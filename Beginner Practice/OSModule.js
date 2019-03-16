const os = require('os'); // require a built-in module('name of the module')

var totalMemory = os.totalmem();
var freeMemory = os.freemem();

//console.log('Total Memory:' + totalmem());

//Template string: ES6 / ES2015: ECMAScript 6

console.log(`Total Memory: ${totalMemory}`);
console.log(`Free Memory: ${freeMemory}`);