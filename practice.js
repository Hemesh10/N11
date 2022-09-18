//➡️ Write File :-
// var fs = require('fs');

// fs.writeFile("poem.txt", "Hey there buddy !" , function(err) {
//     if(err) throw err ;
//     else {
//         console.log("Ban gayi ! \nhui hui hui");
//     }
// }) ⬅️



// ➡️ Read File :-
// var fs = require('fs');

// fs.readFile("poem.txt" , "utf8" , function(err,data) {
//     if(err) throw err;
//     else {
//         console.log(data);
//     }
// }) ⬅️



// ➡️ Append File :-
// var fs = require('fs');

// var content = "Joey doesn't share food !!!"

// fs.appendFile("./temperory/poem.txt" , content , function(err) {
//     if(err) throw err;
//     else {
//         console.log("The " + '"' +  content + '"' + " was appended/added to 'poem.txt' file !");
//     }
// }) ⬅️



// ➡️ Unlink File :-
// var fs = require('fs');

// fs.unlink("poem.txt" , function(err) {
//     if(err) throw err;
//     else {
//         console.log("Done !");
//     }
// }) ⬅️



//➡️ Creating a Server using Node.js :-
const http = require('http');

const server = http.createServer(function(req , res) {
    res.write("Hello World")
    res.end();
})

server.listen(4100, function() {
    console.log("Server running at port http://localhost:4100");
}) 




