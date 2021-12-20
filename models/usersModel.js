const initUsersModel=(sequelize, DataTypes)=> {
    return sequelize.define(
      'users',
      {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: DataTypes.INTEGER,
        },
        name: {
          type: DataTypes.STRING,
        }
      }
    );
  }

  module.exports = initUsersModel