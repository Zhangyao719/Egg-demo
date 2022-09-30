'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;

  const v1 = router.namespace('/cgi/mysql');

  v1.resources('user', '/user', controller.user);
};
