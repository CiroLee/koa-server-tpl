import Router from 'koa-router';
const router = new Router();
import TestController from '@src/controller/test';

const testController = new TestController();
// test
router.get('/api/test', ctx => testController.test(ctx));

export default router;
