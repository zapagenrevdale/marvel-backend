import Movie from "../models/movie.mjs";

const getAllMovies = (req, res, next) => {
  Movie.findAll({ include: { all: true, nested: true } }).then((movies) =>
    res.json(movies)
  );
};

const getMovie = (req, res, next) => {
  Movie.findByPk(req.params.movieId).then((movie) => res.json(movie));
};

export default {
  getAllMovies,
  getMovie,
};
