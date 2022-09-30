'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
  async create() {
    const { ctx } = this;
    const { name } = ctx.request.body;
    try {
      const result = await ctx.service.user.addUser(name);
      ctx.success('添加成功', result);
    } catch (error) {
      ctx.error('添加失败', 500, error);
    }
  }

  async update() {
    const { ctx } = this;
    const { name } = ctx.request.body;
    const { id } = ctx.params;
    try {
      const result = await ctx.service.user.editUser(id, name);
      ctx.success('修改成功', result);
    } catch (error) {
      ctx.error('修改失败', 500, error);
    }
  }

  async destroy() {
    const { ctx } = this;
    try {
      const result = await ctx.service.user.deleteUser(ctx.params.id);
      ctx.success('删除成功', result);
    } catch (error) {
      ctx.error('删除失败', 500, error);
    }
  }
}

module.exports = UserController;
