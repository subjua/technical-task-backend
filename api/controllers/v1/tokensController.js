const tokensService = require('../../../services/tokens')

const create = async (ctx) => {
  const { body } = ctx.request

  if (!body.userName || typeof body.userName !== 'string') {
    ctx.status = 400
    ctx.response.body = {
      message: 'userName is required'
    }

    return
  }

  try {
    const userToken = await tokensService.createToken(body.userName)

    ctx.status = 201
    ctx.response.body = userToken
  } catch (error) {
    ctx.status = 400
    ctx.response.body = {
      message: error.message
    }
  }
}

module.exports = {
  create
}