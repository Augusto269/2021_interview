module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    'error_debug',
    {
      errornumber: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      code: {
        type: DataTypes.STRING,
      },
      errno: {
        type: DataTypes.STRING,
      },
      message: {
        type: DataTypes.STRING,
      },
      parameters: {
        type: DataTypes.TEXT,
      },
      createduser: {
        type: DataTypes.STRING,
      },
      createdat: {
        type: DataTypes.DATE,
      },
    },
    {
      tableName: 'error_debug',
      timestamps: false,
    },
  );
};
