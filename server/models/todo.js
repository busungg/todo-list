module.exports = function (sequelize, DataTypes) {
  const model = sequelize.define(
    'Todo',
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      title: {
        type: DataTypes.STRING,
      },
      desc: {
        type: DataTypes.STRING,
      },
    },
    {
      paranoid: true,
    },
  );

  model.associate = function (db) {
    model.belongsToMany(db['Category'], { through: 'TodoCategories' });
  };

  return model;
};
