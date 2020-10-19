
var fs = require('fs');
var path = require('path');
var PostModel = require('../model/post');
var CounterModel = require('../model/counter');

var add = async (req,res,next)=>{
    var body = req.body;
    var file = req.file;  //得到上传的信息
    //console.log(body);
    //console.log(file);

    fs.renameSync( path.join('./public/uploads' , file.filename) , path.join('./public/uploads' , file.filename + '.png') );

    var { postId } = await CounterModel.findOneAndUpdate({}, { $inc : { postId : 1 } }, { upsert : true , new : true});

    // 数据库操作

    var data = {
        ...body,
        companyLogo : 'http://localhost:3000/uploads/' + file.filename + '.png',
        postId
    };

    PostModel(data).save().then((info)=>{
        if(info){
            res.send('<script>alert("添加职位成功！"); history.back();</script>');
        }
    }).catch((err)=>{
        res.send('<script>alert("添加职位失败！"); history.back();</script>');
    });

};

var update = (req,res,next)=>{

    var body = req.body;
    var file = req.file;

    if(file){   // 修改了 logo 文件

        body.prevLogo = body.prevLogo.replace(/http:\/\/localhost:3000/,'./public'); 
        fs.unlinkSync(body.prevLogo);
        delete body.prevLogo;

        fs.renameSync( path.join('./public/uploads' , file.filename) , path.join('./public/uploads' , file.filename + '.png') );

        var data = {
            ...body,
            companyLogo : 'http://localhost:3000/uploads/' + file.filename + '.png'
        };

        PostModel.update({ postId : body.postId }, {$set : data}).then((info)=>{

            res.send('<script>alert("更新成功！！！"); history.back();</script>');

        }).catch((err)=>{

            res.send('<script>alert("更新失败！！！"); history.back();</script>');

        })

    }
    else{   //没有修改 logo 文件

        PostModel.update({ postId : body.postId },{ $set : body }).then((info)=>{

            res.send('<script>alert("更新成功！！！"); history.back();</script>');

        }).catch((err)=>{

            res.send('<script>alert("更新失败！！！"); history.back();</script>');

        })

    }
    

};



module.exports = {
    add,
    update
};