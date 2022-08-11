import { Context, Next } from 'koa';
import { ERROR_CODE } from '@src/utils/errorCode';
const response = async (ctx: Context, next: Next) => {
  ctx.state.success = () => {
    ctx.body = {
      code: 0,
      message: 'success',
      data: ctx.body,
    };
  };
  ctx.state.fail = ({ code = ERROR_CODE.unkuown.code, message = ERROR_CODE.unkuown.message, data = null }) => {
    ctx.body = {
      code,
      message,
      data,
    };
  };

  await next();
};

export default response;
