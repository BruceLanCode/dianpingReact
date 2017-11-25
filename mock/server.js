/**
 * Created by lantu on 2017/11/24.
 */

const Koa = require('koa');
const Router = require('koa-router');

const app = new Koa();
const router = new Router();

const homeAdData = require('./home/ad');
router.get('/api/homead',(cxt,next) => {
    console.log('首页  -- 广告（超值特惠）')

    cxt.response.body = homeAdData;
})

app.use(router.routes())
app.listen(3000);

