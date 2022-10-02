/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = (exports = {});

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1664180586982_2821';

  // add your middleware config here
  config.middleware = [];

  // egg-view 通用配置 https://www.eggjs.org/zh-CN/core/view
  config.view = {
    defaultViewEngine: 'ejs',
    mapping: { '.html': 'ejs' }, // 指定 .html 文件 使用 ejs 进行渲染
  };

  // 安全配置
  config.security = {
    csrf: {
      cookieName: 'csrfToken', // Cookie 中的字段名，默认为 csrfToken
      headerName: 'x-csrf-token', // 通过 header 传递 CSRF token 的默认字段为 x-csrf-token
    },
  };

  exports.mysql = {
    // 单数据库信息配置
    client: {
      host: 'localhost',
      port: '3306',
      database: 'test', // 新建的数据库名称
      user: 'root', // 用户名
      password: 'root', // 初始化密码，没设置的可以不写
    },
    app: true, // 是否加载到 app 上，默认开启
    agent: false, // 是否加载到 agent 上，默认关闭
  };

  config.jwt = {
    secret: process.env.TOKEN_KEY,
  };

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};
