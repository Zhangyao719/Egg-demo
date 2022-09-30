'use strict';

const Service = require('egg').Service;

class DemoService extends Service {
// 新增
  async addUser(name) {
    const { app } = this;
    return await app.mysql.insert('list', { name }); // 给 list 表，新增一条数据
  }

  // 编辑
  async editUser(id, name) {
    const { app } = this;
    return await app.mysql.update('list', { name }, {
      where: {
        id,
      },
    });
  }

  // 删除
  async deleteUser(id) {
    const { app } = this;
    return await app.mysql.delete('list', { id });
  }
}
module.exports = DemoService;
