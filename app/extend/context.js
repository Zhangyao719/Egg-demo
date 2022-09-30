'use strict';

module.exports = {
  success(message = 'Success', data) {
    this.body = {
      code: 200,
      message,
      data,
    };
  },
  error(err, code = 500, data = null) {
    this.status = code;
    this.body = {
      code,
      message: err,
      data,
    };
  },
};
