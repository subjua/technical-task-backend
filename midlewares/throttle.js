const throttle = async (ctx, next) => {
  const isError = Math.floor((Math.random() * 4) + 0)

  if (!isError) {
    ctx.status = 400
    ctx.response.body = { }
  } else {
    await next()
  }
}

module.exports = throttle