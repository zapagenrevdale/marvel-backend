import Sequelize from "sequelize";

import sequelize from "../utils/database.mjs";

const Imdb = sequelize.define("imdb", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  Title: Sequelize.STRING,
  Year: Sequelize.STRING,
  Rated: Sequelize.STRING,
  Released: Sequelize.STRING,
  Runtime: Sequelize.STRING,
  Genre: Sequelize.STRING,
  Director: Sequelize.STRING,
  Writer: Sequelize.STRING,
  Actors: Sequelize.STRING,
  Plot: Sequelize.TEXT,
  Language: Sequelize.STRING,
  Country: Sequelize.STRING,
  Awards: Sequelize.STRING,
  Poster: Sequelize.STRING,
  Metascore: Sequelize.STRING,
  imdbRating: Sequelize.STRING,
  imdbVotes: Sequelize.STRING,
  imdbID: Sequelize.STRING,
  Type: Sequelize.STRING,
  DVD: Sequelize.STRING,
  BoxOffice: Sequelize.STRING,
  Production: Sequelize.STRING,
  Website: Sequelize.STRING,
});


export default Imdb;