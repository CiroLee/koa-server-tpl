import { Context } from 'koa';
import Base from '@src/service/base';

export default class TestController extends Base {
  test(ctx: Context) {
    const { query } = ctx;
    const params = this.joiValidate(
      {
        type: this.JOI.string().required(),
      },
      query
    );

    ctx.body = {
      type: params.type,
      time: new Date().toString(),
    };
  }
}
