'use strict';

const tokensService = require('../services/apiTokenService');

const requireAuth = async (ctx, next) => {
  if (!ctx.headers || !ctx.headers.authorization) {
    ctx.status = 401;
    ctx.response.body = {
      error: 'Authorization is required'
    };

    return;
  }

  try {
    const extractedToken = extractTokenFromHeader(ctx.headers.authorization);

    const token = await tokensService.validateToken(extractedToken);
    ctx.userId = token.id;

    await next();
  } catch (error) {
    console.error(error);

    ctx.status = 401;
    ctx.response.body = {
      error: 'Invalid API token'
    };
  }
};

const extractTokenFromHeader = (header = '') => {
  if (header.length && header.indexOf('Bearer') === 0) {
    return header.substring(7);
  }

  throw new Error('Invalid Authorization Header');
};

module.exports = requireAuth;
