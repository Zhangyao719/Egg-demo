'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;

  const v1 = router.namespace('/cgi/sign');

  v1.post('/token', controller.signature.getSignature);
  v1.get('/validate', controller.signature.validateSignature);
};
