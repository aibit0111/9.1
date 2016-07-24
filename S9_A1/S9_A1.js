var express = require('express');
var app = express();
var fs = require('fs');
app.listen(909,function(req,res){
});
fs.readFile('sample.txt','utf8',function(error,data){
    console.log(data);
    app.get('',function(req,res){
        res.send(data);
    })
});