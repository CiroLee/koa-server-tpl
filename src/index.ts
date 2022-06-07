import Koa from 'koa';
import compose from 'koa-compose';
import koaBody from 'koa-body';
import error from '@src/middlewares/error';
import response from './middlewares/response';
import router from './router';
import { ERROR_CODE } from '@src/utils/errorCode';
const ENV = process.env.NODE_ENV;

const PORT = process.env.PORT || 8082;

function startKoaServer() {
  const app = new Koa();
  app.use(koaBody());
  app.use(compose([error, response]));
  app.use(router.routes());
  app.use(router.allowedMethods());
  // 捕获系统错误
  app.on('error', (error, ctx) => {
    console.log(error);
    ctx.body = {
      code: error.code || ERROR_CODE.systemError.code,
      message: error.message,
    };
  });

  app.listen(PORT, () => {
    console.log(`server is running on PORT :${PORT}`, `env: ${ENV}`);
  });
}

startKoaServer();
