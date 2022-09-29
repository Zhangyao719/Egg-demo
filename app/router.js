'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.demo.index);
  router.get('/user/:id', controller.demo.user);
  router.post('/add', controller.demo.add);
  router.get('/info', controller.demo.getInfo);
};
