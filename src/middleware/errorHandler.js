'use strict';

module.exports = async (ctx, next) => {
    try {
        await next();
    } catch (err) {
        console.error(err);
        ctx.status = err.status || 500;
    }
};
