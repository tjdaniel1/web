var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: '홈페이지', pageName:'home.ejs' });
});
// 렌더링: ejs 파일
// 루트 - 렌더링(인덱스(ejs파일) 페이지 출력) / 타이틀:홈페이지
// 인덱스.ejs -> views 폴더
// 컨트롤러 라우터

module.exports = router;
