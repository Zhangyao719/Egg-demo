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
  const config = exports = {};

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

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};
