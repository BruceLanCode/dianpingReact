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

app.use(router.routes());
app.listen(3000);

