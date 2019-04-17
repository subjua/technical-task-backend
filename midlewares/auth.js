const tokensService = require('../services/tokens')

const auth = async (ctx, next) => {
  if (!ctx.headers || !ctx.headers.authorization || !ctx.headers.authorization.length) {
    ctx.status = 401
    ctx.response.body = {
      message: 'Authorization is required'
    }

    return
  }

  try {
    const extractedToken = await tokensService.extractTokenFromHeader(ctx.headers.authorization)

    ctx.params.payload = await tokensService.validateToken(extractedToken)

    await next()
  } catch (error) {
    console.error('auth::', error)

    ctx.status = 401
    ctx.response.body = {
      message: error.message
    }
  }
}

module.exports = auth