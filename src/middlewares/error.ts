import { Context, Next } from 'koa';
import { throwError } from '@src/utils/utils';
import { CustomError } from '@src/types/common';
import { ERROR_CODE } from '@src/utils/errorCode';
// 使用中间件方式捕获响应和异常，在具体请求中不用再单独对catch处理
const error = async (ctx: Context, next: Next) => {
  try {
    await next();
    if (ctx.status === 200) {
      ctx.state.success();
    }
    if (ctx.status === 404) {
      throwError({
        code: ERROR_CODE.ApiNotFound.code,
        message: ERROR_CODE.ApiNotFound.message,
      });
    }
  } catch (error) {
    // 主动抛出错误
    if (error instanceof CustomError && error.code) {
      ctx.state.fail({ code: error.code, message: error.message, data: error.data });
    } else {
      // 系统运行错误
      ctx.app.emit('error', error, ctx);
    }
  }
};

export default error;
