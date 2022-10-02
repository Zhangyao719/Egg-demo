'use strict';

const Controller = require('egg').Controller;

class SignController extends Controller {
  getSignature() {
    const { ctx, service } = this;
    const { username, password } = ctx.request.body;
    try {
      const token = 'Bearer ' + service.signature.encode(username, password);
      ctx.success(undefined, { token });
    } catch (error) {
      ctx.error(undefined, undefined, error);
    }
  }

  validateSignature() {
    const { ctx, service } = this;
    try {
      // 请求头获取 authorization 属性，值为 token
      const auth = ctx.request.header.authorization;
      const decode = service.signature.decode(auth.split(' ')[1]);
      // 核对身份信息......(略)
      ctx.success(undefined, { decode });
    } catch (error) {
      ctx.error(undefined, 401, error);
    }
  }
}

module.exports = SignController;
