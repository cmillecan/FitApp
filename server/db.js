// sequelize ORM
const { Sequelize, DataTypes} = require('sequelize');
const setupDB = async ({host, database, user, password}) => {
    const sequelize = new Sequelize(database, user, password, {
        host,
        dialect: 'mysql'
    });
    // await for promise before continuing to run (keep all this code synchronous, or one after the other)
    try {
        await sequelize.authenticate()
    } catch (err) {
        console.error("error connecting to db: ", err);
        return;
    }
    console.log('Connected to db');
    // users schema
    const User = sequelize.define('User', {
        id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
        name: { type: DataTypes.STRING, allowNull: false }
    }, {});

    // workouts schema
    const Workout = sequelize.define('Workout', {
        id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
        userId: {
            type: DataTypes.INTEGER,
            references: {
                model: User,
                key: 'id',
            },
            allowNull: false,
        },
        category: { type: DataTypes.STRING, allowNull: false },
        exercise: { type: DataTypes.STRING, allowNull: false },
        schema: { type: DataTypes.STRING },
        weight: { type: DataTypes.INTEGER },
        unit: { type: DataTypes.STRING },
        notes: { type: DataTypes.TEXT }
    }, {});
    // force will overwrite the existing db
    await sequelize.sync({force: true});
    console.log("All models were synchronized successfully.");
    return {Workout, User};
}
module.exports = setupDB;