'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'hi, egg';
  }

  // 获取 URL params参数 和 query 参数
  async user() {
    const { ctx } = this;
    const { id } = ctx.params;
    const { name } = ctx.query;
    ctx.body = `user id: ${id}，\nuser name: ${name}`;
  }

  // post 请求获取
  async add() {
    const { ctx } = this;
    const { title } = ctx.request.body;
    // Egg 框架内置了 bodyParser 中间件来对 POST 请求 body 解析成 object 挂载到 ctx.request.body 上
    ctx.body = {
      title,
    };
  }
}

module.exports = HomeController;
