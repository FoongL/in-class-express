const initTasksModel = (sequelize, DataTypes) => {
    return sequelize.define(
        'tasks',
        {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: DataTypes.INTEGER,
            },
            name: {
                type: DataTypes.STRING,
            },
            userId: {
                type: DataTypes.INTEGER,
                references: {
                    model: 'users',
                    key: 'id',
                },
            }
        }
    );
}

module.exports = initTasksModel