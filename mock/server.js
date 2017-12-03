/**
 * Created by lantu on 2017/11/24.
 */

const Koa = require('koa');
const Router = require('koa-router');

const app = new Koa();
const router = new Router();

const homeAdData = require('./home/ad');
router.get('/api/homead',(cxt) => {
    cxt.response.body = homeAdData;
});

const homeListData = require('./home/list');
router.get('/api/homeList/:city/:page',(cxt) => {
    cxt.response.body = homeListData;
    console.log();
});

const searchListData = require('./search/list');
router.get('/api/search/:page/:city/:category/:keyword',(cxt) => {
    cxt.response.body = searchListData;
});

const detailInfo = require('./detail/info.js');
router.get('/api/detail/info/:id',(cxt) => {
    cxt.response.body = detailInfo;
});

const detailComment = require('./detail/comment.js');
router.get('/api/detail/comment/:page/:id',(cxt) => {
    cxt.response.body = detailComment;
});

const orderList = require('./orderList/orderList.js');
router.get('/api/orderList/:username',(cxt) => {
    cxt.response.body = orderList;
});

router.post('/api/submitCommet',(cxt) => {
    console.log('提交评论');
    cxt.response.body = {
        errno: 0,
        msg: 'ok'
    };
});

app.use(router.routes());
app.listen(3000);

