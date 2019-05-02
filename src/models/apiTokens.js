module.exports = (sequelize, DataTypes) => {
  const ApiTokens = sequelize.define('api_tokens', {
    userName: DataTypes.STRING,
    token: DataTypes.STRING,
  }, {
      timestamps: false
    }
  );

  return ApiTokens;
};