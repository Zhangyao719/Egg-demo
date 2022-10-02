'use strict';

/** @type Egg.EggPlugin */
module.exports = {
  // had enabled by egg
  // static: {
  //   enable: true,
  // }
  routerPlus: {
    enable: true,
    package: 'egg-router-plus',
  },

  ejs: {
    enable: true,
    package: 'egg-view-ejs',
  },

  mysql: {
    enable: true,
    package: 'egg-mysql',
  },

  jwt: {
    enable: true,
    package: 'egg-jwt',
  },
};
