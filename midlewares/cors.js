const cors = async (ctx, next) => {
  ctx.set('Access-Control-Allow-Origin', "*")
  ctx.set('Access-Control-Allow-Methods', 'GET, POST, PATCH, PUT, DELETE, UPDATE, OPTIONS')
  ctx.set('Access-Control-Allow-Headers', '*')
  ctx.set('Access-Control-Allow-Credentials', 'true')

  await next()
}

module.exports = cors