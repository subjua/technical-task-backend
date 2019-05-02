const Joi = require('joi');

module.exports = ({ schema, handler }) => async ctx => {
  let input = ctx.method === 'GET' ? ctx.request.query : ctx.request.body;

  input = { ...input, ...ctx.params };

  const { error, value } = Joi.validate(input, schema, {
    abortEarly: false,
    allowUnknown: true,
  });

  if (error) {
    const errorDetails = error.details.map(detail => detail.message).join('\n\t');
    const validationError = new Error(`Request failed:\n\t${errorDetails}`);

    validationError.status = 400;

    throw validationError;
  }

  const result = await handler(ctx, value);

  if (result !== undefined) {
    ctx.body = result;
  }
};
