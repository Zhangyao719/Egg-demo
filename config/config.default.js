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

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
    security: {
      csrf: {
        // Cookie 中的字段名，默认为 csrfToken
        cookieName: 'csrfToken',

        // 通过 header 传递 CSRF token 的默认字段为 x-csrf-token
        headerName: 'x-csrf-token',
      },
    },
  };

  return {
    ...config,
    ...userConfig,
  };
};
