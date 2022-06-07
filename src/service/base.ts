import { ObjType } from '@src/types/common';
import Joi from 'joi';
import { throwError } from '@src/utils/utils';
import { ERROR_CODE } from '@src/utils/errorCode';
// 基类, 通用基础类, 所有controller类都要继承Base
export default class Base {
  readonly JOI = Joi;
  readonly throwError = throwError;
  readonly ERROR_CODE = ERROR_CODE;
  /**
   * @desc 参数验证
   * @param object Joi schema校验规则
   * @param params 待检验参数
   */
  joiValidate<T>(object: Joi.PartialSchemaMap<T>, params: ObjType): T {
    const schema = Joi.object(object);
    const { value, error } = schema.validate(params);
    if (error) {
      this.throwError({
        code: this.ERROR_CODE.invalidParams.code,
        message: this.ERROR_CODE.invalidParams.message,
        data: error.message && error.message.replace(/"/g, ''),
      });
    }
    return value;
  }
}
