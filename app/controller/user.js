'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
  async create() {
    const { ctx } = this;
    const { name } = ctx.request.body;
    try {
      const result = await ctx.service.user.addUser(name);
      ctx.body = {
        code: 200,
        msg: '添加成功',
        data: result,
      };
    } catch (error) {
      ctx.body = {
        code: 500,
        msg: '添加失败',
        data: null,
      };
    }
  }

  async update() {
    const { ctx } = this;
    const { name } = ctx.request.body;
    const { id } = ctx.params;
    try {
      const result = await ctx.service.user.editUser(id, name);
      ctx.body = {
        code: 200,
        msg: '修改成功',
        data: result,
      };
    } catch (error) {
      ctx.body = {
        code: 500,
        msg: '修改失败',
        data: null,
      };
    }
  }

  async destroy() {
    const { ctx } = this;
    try {
      const result = await ctx.service.user.deleteUser(ctx.params.id);
      ctx.body = {
        code: 200,
        msg: '删除成功',
        data: result,
      };
    } catch (error) {
      ctx.body = {
        code: 500,
        msg: '删除失败',
        data: null,
      };
    }
  }
}

module.exports = UserController;
