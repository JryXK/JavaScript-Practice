//global objects
    //console.log();

    //setTimeout();
    //clearTimeout();

    ///setInterval();
    //clearInterval();

//window.console.log() For Global call in browser

    //var message = ''; Non-global; Scope is this file

//Module: console.log(module) for module information in JSON format
//Creating a Module:

//
//var request = require('./private module');  
    //assume .js as default
const request = require('./private module'); //This one is better
    //cause we don't want to accidentally override the value;
    //like request = 111;
console.log(request);




//What is the difference between var and let??
