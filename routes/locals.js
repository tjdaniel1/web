var express = require('express');
var router = express.Router();

/* 지역검색 */
router.get('/', function(req, res, next) {
  res.render('index', { title: '지역검색', pageName:'locals/search.ejs' });
});
// 렌더링: ejs 파일
// 루트 - 렌더링(인덱스(ejs파일) 페이지 출력) / 타이틀:홈페이지
// 인덱스.ejs -> views 폴더
// 컨트롤러 라우터

// 라우터 만들면 app에 등록하기!


//즐겨찾기 페이지 이동
router.get('/favorite', function(req,res){
  res.render('index',{title : '즐겨찾기', pageName:'locals/favorite.ejs'})
});

module.exports = router;
