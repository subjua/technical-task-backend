const cors = async (ctx, next) => {
  const origin = ctx.headers.origin

  console.info('ctx.headers', ctx.headers)

  ctx.set('Access-Control-Allow-Origin', "*")
  ctx.set('Access-Control-Allow-Methods', '*')
  ctx.set('Access-Control-Allow-Headers', '*')
  ctx.set('Access-Control-Allow-Credentials', 'true')

  await next()
}

module.exports = cors