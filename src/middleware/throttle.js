'use strict';

module.exports = async (ctx, next) => {
  if (Math.random() < 0.3) {
    ctx.status = 503;
  } else {
    await next();
  }
};
