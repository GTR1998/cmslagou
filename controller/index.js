

var login = (req,res,next)=>{
    res.render('login');
};
var register = (req,res,next)=>{
    res.render('register');
};
var admin = (req,res,next)=>{
    res.render('admin',{
        username : req.session.username
    });
};

var admin_postedit = (req,res,next)=>{
    res.render('admin_postedit',{
        username : req.session.username
    });
};
var admin_postadd = (req,res,next)=>{
    res.render('admin_postadd',{
        username : req.session.username
    });
};

module.exports = {
    login,
    register,
    admin,
    admin_postedit,
    admin_postadd
};