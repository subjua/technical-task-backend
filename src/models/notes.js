module.exports = (sequelize, DataTypes) => {
  const Notes = sequelize.define('notes', {
      title: DataTypes.STRING,
      content: DataTypes.STRING,
      userId: {
        type: DataTypes.STRING,
        allowNull: false,
        exclude: true
      }
    }, {
      timestamps: false
    }
  );

  Notes.prototype.toJSON = function () {
    var values = Object.assign({}, this.get());

    delete values.userId;

    return values;
  };

  return Notes;
};
