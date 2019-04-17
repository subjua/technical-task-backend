const fs = require('fs')
const path = require('path')
const markdown = require('markdown-js')

const index = (ctx) => {
  const file = fs.readFileSync(path.join(__dirname, "api.md"), "utf8")
  const mdHtml = markdown.makeHtml(file)

  ctx.response.body = mdHtml
}

module.exports = {
  index
}