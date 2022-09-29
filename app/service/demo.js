'use strict';

const Service = require('egg').Service;

class DemoService extends Service {
  async info() {
    // 假设从数据库获取的用户信息
    return {
      name: '嘎子',
      slogen: '网络的世界太虚拟,你把握不住',
    };
  }
}
module.exports = DemoService;
