const throttle = async (ctx, next) => {
  const isError = Math.floor((Math.random() * 2) + 1)

  if (isError) {
    ctx.status = 401
    ctx.response.body = { message: 'Authorization is required' }
  } else {
    await next()
  }
}

module.exports = throttle