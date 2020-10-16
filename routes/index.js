var express = require('express');
var controllerIndex = require('../controller/index');
var router = express.Router();

// 访问 login 页面
router.get('/login',controllerIndex.login);

//访问 register 页面
router.get('/register',controllerIndex.register);

//访问 admin 页面
router.get('/admin',controllerIndex.admin);

// 匹配补上的路由，跳转到 login 页面
router.get('*',(req,res,next)=>{
  res.redirect('/login');
});

// MVC ： Model (数据)   View(视图)    Controller(控制器)
//    Controller(控制器) : 中间层去连接 M 和 V。

module.exports = router;
