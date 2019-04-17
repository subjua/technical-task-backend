const cors = async (ctx, next) => {
  const origin = ctx.headers.origin

  ctx.set('Access-Control-Allow-Origin', origin)
  ctx.set('Access-Control-Allow-Methods', '*')
  ctx.set('Access-Control-Allow-Headers', '*')
  ctx.set('Access-Control-Allow-Credentials', 'true')

  await next()
}

module.exports = cors