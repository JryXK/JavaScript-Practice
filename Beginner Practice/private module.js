var url =  'https://www.google.ca';

function request(message){
        // Send an HTTP request
        console.log(message);
}   

// MAKE A FUNCTION/OBJ PUBLIC
// module.exports.log = request; *
// exports.log = request; could work *
    // but exports = function () {
    //      console.log("hello world")
    //      }
    // will set the default reference of exports to something other
     //than the object module.exports

//Since I only have a single function here in this file
//There is no need to export an entire object like the one above
//Instead, I can just export the specific function 
    module.exports = request;   




//make a var public 
//module.exports.endPoint = url; should keep private


