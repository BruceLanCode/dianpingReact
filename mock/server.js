/**
 * Created by lantu on 2017/11/24.
 */

const app = require('koa')();
const router = require('koa-router')();

const homeAdData = require('./home/ad');
router.get('/api/homead',async (cxt,next) => {
    console.log('首页  -- 广告（超值特惠）')

    cxt.response.body = homeAdData;
})

app.use(router.routes())
    .use(router.allowedMethods());
app.listen(3000);

