import Movie from "../models/movie.mjs";
import { Op } from "sequelize";
import sequelize from "sequelize";

const getAllMovies = (req, res, next) => {
  Movie.findAll({ include: { all: true, nested: true } }).then((movies) =>
    res.json(movies)
  );
};

const getMovie = (req, res, next) => {
  Movie.findByPk(req.params.movieId).then((movie) => res.json(movie));
};

const getFeaturedMovie = (req, res, next) => {
  Movie.findOne({
    where: { trailer_url: { [Op.ne]: null } },
    order: [sequelize.fn("RAND")],
    include: { all: true, nested: true },
  }).then((movie) => res.json(movie));
};

export default {
  getAllMovies,
  getMovie,
  getFeaturedMovie,
};
