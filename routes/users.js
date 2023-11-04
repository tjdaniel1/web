var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

// 로그인 페이지 이동
router.get('/login', function(req, res, next){
  res.render('index', {title:'로그인',pageName:'users/login.ejs'});
})

// 회원가입페이지 이동
router.get('/join', function(req, res, next){
  res.render('index', {title:'회원가입',pageName:'users/join.ejs'});
})


// ejs 파일은 view 폴더에 넣기~

router.get('/mypage',function(req,res){
  res.render('index',{title: '마이페이지', pageName:'users/mypage.ejs'});
})
module.exports = router;
