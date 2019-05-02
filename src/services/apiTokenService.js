const crypto = require('crypto');
const models = require('../models');

const createToken = async (userName = '') => {
  try {
    const token = crypto.randomBytes(16).toString('hex');

    return await models.apiTokens.create({ userName, token });
  } catch (error) {
    console.error(error);

    throw new Error('Token creation error');
  }
};

const validateToken = async (token) => {
  const apiToken = await models.apiTokens.findOne({ where: { token } });

  if (!apiToken) {
    throw new Error('API token not found');
  }

  return apiToken;
};

module.exports = {
  createToken,
  validateToken,
};
