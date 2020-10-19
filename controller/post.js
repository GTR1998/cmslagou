
var fs = require('fs');
var path = require('path');

var add = (req,res,next)=>{
    var body = req.body;
    var file = req.file;  //得到上传的信息
    console.log(body);
    console.log(file);

    fs.renameSync( path.join('./public/uploads' , file.filename) , path.join('./public/uploads' , file.filename + '.png') );

    // 数据库操作
};



module.exports = {
    add
};