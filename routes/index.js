var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// 访问 login 页面
router.get('/login',(req,res,next)=>{
    res.render('login');
});

//访问 register 页面
router.get('/register',(req,res,next)=>{
  res.render('register');
});

//访问 admin 页面
router.get('/admin',(req,res,next)=>{
  res.render('admin');
});

// 匹配补上的路由，跳转到 login 页面
router.get('*',(req,res,next)=>{
  res.redirect('/login');
});

module.exports = router;
