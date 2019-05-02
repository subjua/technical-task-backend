'use strict';

const Joi = require('joi');
const apiEndpoint = require('../../apiEndpoint');
const models = require('../../models');

const create = apiEndpoint({
  schema: Joi.object({
    title: Joi.string().min(1).max(64).required(),
    content: Joi.string().max(256)
  }),
  handler: async (ctx, { title, content }) => {
    const note = await models.notes.create({
      userId: ctx.userId,
      title,
      content
    });

    ctx.status = 201;
    ctx.response.body = note;
  },
});

const update = apiEndpoint({
  schema: Joi.object({
    id: Joi.number().required(),
    title: Joi.string().min(1).max(64),
    content: Joi.string().max(256)
  }).or('title', 'content'),
  handler: async (ctx, { id, title, content }) => {
    const note = await models.notes.update(
      { title, content, userId: ctx.userId, id },
      { returning: true, where: { userId: ctx.userId, id } }
    );

    if (!note[0]) {
      ctx.status = 404;
    } else {
      ctx.status = 200;
      ctx.response.body = note[1][0];
    }
  }
});

const destroy = apiEndpoint({
  schema: Joi.object({
    id: Joi.number().required()
  }),
  handler: async (ctx, { id }) => {
    const note = await models.notes.destroy({
      where: {
        id,
        userId: ctx.userId
      }
    });

    if (!note) {
      ctx.status = 404;
    } else {
      ctx.status = 204;
    }
  }
});

const find = apiEndpoint({
  schema: Joi.object({}),
  handler: async (ctx) => {
    const notes = await models.notes.findAll({
      where: {
        userId: ctx.userId
      }
    });

    ctx.response.body = {
      notes
    };
  }
});

module.exports = {
  create,
  destroy,
  find,
  update
};
