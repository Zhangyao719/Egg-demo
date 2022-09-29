'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;

  const v1 = router.namespace('/cgi/v1');

  v1.get('/namespace', controller.demo.handleRouterNamespace);
};
