'use strict';

const Joi = require('joi');
const apiEndpoint = require('../../apiEndpoint');
const tokensService = require('../../services/apiTokenService');

const create = apiEndpoint({
  schema: Joi.object({
    userName: Joi.string().required()
  }),
  handler: async (ctx, { userName }) => {
    const userToken = await tokensService.createToken(userName);

    ctx.status = 201;
    ctx.response.body = userToken;
  }
});

module.exports = {
  create
};
