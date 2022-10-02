'use strict';

const Service = require('egg').Service;

class SignatureService extends Service {
  encode(username, password) {
    const { app } = this;
    // 生成 token 加盐
    // app.jwt.sign 方法接受两个参数，第一个为对象，对象内是需要加密的内容；第二个是加密字符串
    const token = app.jwt.sign(
      {
        username,
        password,
        exp: Math.floor(Date.now() / 1000) + 24 * 60 * 60, // token 有效期为 24 小时
      },
      app.config.jwt.secret
    );
    return token;
  }

  decode(token) {
    const { app } = this;
    // 通过 app.jwt.verify + 加密字符串 解析出 token 的值
    const decode = app.jwt.verify(token, app.config.jwt.secret);
    return decode;
  }
}
module.exports = SignatureService;
