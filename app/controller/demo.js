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
    const { ctx, app } = this;
    const { title } = ctx.request.body;
    // Egg 框架内置了 bodyParser 中间件来对 POST 请求 body 解析成 object 挂载到 ctx.request.body 上
    ctx.body = {
      title,
      // eggEnv: EGG_SERVER_ENV,
      processEnv: process.env,
      configEnv: app.config.env,
    };
  }

  // 从 service 获取数据
  async getInfo() {
    const { ctx, service } = this;
    const { name, slogen } = await service.demo.info();
    ctx.body = {
      name,
      slogen,
    };
  }

  // egg-router-plus
  async handleRouterNamespace() {
    this.ctx.body = '这是个 namespace 路由请求';
  }

  // egg-view-ejs template
  async render() {
    /*
     * 在 Context 上提供了 3 个渲染接口，返回值均为 Promise:
     * - 1. render(name, locals) 渲染模板文件, 并赋值给 ctx.body
     * - 2. renderView(name, locals) 渲染模板文件, 仅返回不赋值
     * - 3. renderString(tpl, locals) 渲染模板字符串, 仅返回不赋值
     */
    const { ctx } = this;
    const data = { title: '我是 egg-view-ejs 模板' }; // 将 title 传入 index.html

    // ctx.render 默认会去 view 文件夹寻找 index.html，这是 Egg 约定好的默认路径
    await ctx.render('index.html', data);

    // ctx.body = await ctx.renderView('index.html', data);
  }

  // egg-mysql
  async mysql() {
    const { ctx } = this;
    const result = await ctx.service.demo.getSqlData();
    ctx.body = result;
  }
}

module.exports = HomeController;
