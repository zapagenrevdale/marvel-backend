import Sequelize from "sequelize";

import sequelize from "../utils/database.mjs";

const Rating = sequelize.define("rating", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  Source: Sequelize.STRING,
  Value: Sequelize.STRING,
});

export default Rating;
