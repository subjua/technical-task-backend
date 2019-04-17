const models = require('../../../models')

const create = async (ctx) => {
  const { body } = ctx.request
  const requiredFields = ['title']
  const authorizedUserId = ctx.params.payload.id

  try {
    for (const key of requiredFields) {
      if (!body[key]) {
        throw new Error(`${key} is required`)
      }
    }

    const note = await models.notes.create({
      userId: authorizedUserId,
      title: body.title,
      content: body.content
    })

    ctx.status = 201
    ctx.response.body = note
  } catch (error) {
    ctx.status = 400
    ctx.response.body = {
      message: error.message
    }
  }
}

const update = async (ctx) => {
  const noteId = ctx.params.id
  const { body } = ctx.request
  const authorizedUserId = ctx.params.payload.id

  try {

    const note = await models.notes.update(
      { ...body, userId: authorizedUserId, id: noteId },
      { returning: true, where: { userId: authorizedUserId, id: noteId } }
    )

    if (!note[0]) {
      ctx.status = 404
      ctx.response.body = {
        message: `Note with id: ${noteId} not found`
      }
    } else {
      ctx.status = 200
      ctx.response.body = note[1][0]
    }
  } catch (error) {
    ctx.status = 400
    ctx.response.body = {
      message: error.message
    }
  }
}

const destroy = async (ctx) => {
  const noteId = ctx.params.id
  const authorizedUserId = ctx.params.payload.id

  try {
    const note = await models.notes.destroy({
      where: {
        id: noteId,
        userId: authorizedUserId
      }
    })

    if (!note) {
      ctx.status = 404
      ctx.response.body = {
        message: `Note with id: ${noteId} not found`
      }

      return
    }

    ctx.status = 204
    ctx.response.body = ""
  } catch (error) {
    ctx.status = 400
    ctx.response.body = {
      message: error.message
    }
  }
}

const find = async (ctx) => {
  const authorizedUserId = ctx.params.payload.id
  const notes = await models.notes.findAll({
    where: {
      userId: authorizedUserId
    }
  })

  ctx.response.body = {
    notes
  }
}

const findOne = async (ctx) => {
  const noteId = ctx.params.id
  const authorizedUserId = ctx.params.payload.id
  const note = await models.notes.findOne({
    where: {
      id: noteId,
      userId: authorizedUserId
    }
  })

  if (!note) {
    ctx.status = 404
    ctx.response.body = {
      message: `Note with id: ${noteId} not found`
    }

    return
  }

  ctx.response.body = note
}

module.exports = {
  create,
  destroy,
  find,
  findOne,
  update
}