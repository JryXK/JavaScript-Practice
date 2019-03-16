const path = require("path");

var pathObj = path.parse(__filename);

console.log(pathObj);
//{root: C : \\
// dir:  ...
// base: PathModule.js
// ext: js
// name: PathModule
//  }