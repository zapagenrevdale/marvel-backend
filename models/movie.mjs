import Sequelize from "sequelize";
import sequelize from "../utils/database.mjs";

const Movie = sequelize.define("movie", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  title: Sequelize.STRING,
  release_date: Sequelize.STRING,
  box_office: Sequelize.STRING,
  duration: Sequelize.INTEGER,
  overview: Sequelize.TEXT,
  cover_url: Sequelize.STRING,
  trailer_url: Sequelize.STRING,
  directed_by: Sequelize.STRING,
  phase: Sequelize.INTEGER,
  saga: Sequelize.STRING,
  chronology: Sequelize.INTEGER,
  post_credit_scenes: Sequelize.INTEGER,
  imdb_id: Sequelize.STRING,
});


export default Movie