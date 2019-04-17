const models = require('../models')
const idUtils = require('../utils/id')

const createToken = async (userName = '') => {
  try {
    const token = idUtils.getUniqId()
    const apiToken = await models.apiTokens.create({
      userName,
      token
    })

    return apiToken
  } catch (error) {

    throw new Error('Create Token Error')
  }
}

const validateToken = async (token = '') => {
  if (token && token.length) {
    try {
      const apiToken = await models.apiTokens.findOne({
        where: { token }
      })

      if (!apiToken) {
        throw new Error()
      } else {
        return apiToken
      }

    } catch (error) {
      throw new Error('Validation Token Error')
    }
  } else {
    throw new Error('Invalid Token')
  }
}

const extractTokenFromHeader = async (authorizationHeader = '') => {
  if (authorizationHeader.length && authorizationHeader.indexOf('Bearer') === 0) {
    return authorizationHeader.substring(7)
  }

  throw new Error('Invalid Authorization Header')
}

module.exports = {
  createToken,
  validateToken,
  extractTokenFromHeader
}