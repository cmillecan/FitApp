// sequelize ORM
const { Sequelize, DataTypes } = require("sequelize");
const setupDB = async ({ host, database, user, password }) => {
    const sequelize = new Sequelize(database, user, password, {
        host,
        dialect: "mysql",
    });
    // await for promise before continuing to run (keep all this code synchronous, or one after the other)
    try {
        await sequelize.authenticate();
    } catch (err) {
        console.error("error connecting to db: ", err);
        return;
    }
    console.log("Connected to db");

    // users schema
    const User = sequelize.define(
        "user",
        {
            id: { type: DataTypes.STRING, primaryKey: true },
            name: { type: DataTypes.STRING, allowNull: false },
        },
        {}
    );

    // workouts schemed
    const Workout = sequelize.define(
        "workout",
        {
            id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
            userId: {
                type: DataTypes.STRING,
                references: {
                    model: User,
                    key: "id",
                },
                allowNull: false,
            },
            category: { type: DataTypes.STRING, allowNull: false },
            notes: { type: DataTypes.TEXT },
        },
        {}
    );

    const Exercise = sequelize.define("exercise", {
        id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
        workoutId: {
            type: DataTypes.INTEGER,
            references: {
                model: Workout,
                key: "id",
            },
            allowNull: false,
        },
        exercise: { type: DataTypes.STRING, allowNull: false },
        schema: { type: DataTypes.STRING },
        weight: { type: DataTypes.INTEGER },
        unit: { type: DataTypes.STRING },
    });

    User.hasMany(Workout, { foreignKey: "userId" });
    Workout.belongsTo(User, { foreignKey: "userId" });

    Workout.hasMany(Exercise, { foreignKey: "workoutId" });
    Exercise.belongsTo(Workout, { foreignKey: "workoutId" });

    // force will overwrite the existing db
    await sequelize.sync({ force: true });
    console.log("All models were synchronized successfully.");
    return { User, Workout, Exercise };
};
module.exports = setupDB;