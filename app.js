import fetch from "node-fetch";
import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";

// custom imports
import sequelize from "./utils/database.mjs";
import Movie from "./models/movie.mjs";
import Imdb from "./models/imdb.mjs";
import Rating from "./models/rating.mjs";
import movieRoutes from "./routes/movie.mjs";

dotenv.config();
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use("/marvel", movieRoutes);

Movie.hasOne(Imdb);
Imdb.belongsTo(Movie);

Imdb.hasMany(Rating);
Rating.belongsTo(Imdb);

sequelize
  .sync()
  .then((res) => res)
  .catch((error) => console.log(error));

// sequelize
//   .sync()
//   .then((result) =>
//     fetch(process.env.MOVIES_URL, {
//       method: "GET",
//     })
//   )
//   .then((response) => {
//     return response.json();
//   })
//   .then((response) => {
//     //slicing might be necessary
//     const marvelMovies = response.data;

//     marvelMovies.forEach((marvelMovie) => {
//       Movie.create(marvelMovie).then((movie) => {
//         fetch(`${process.env.IMDB_URL}${movie.imdb_id}`, {
//           method: "GET",
//           headers: {
//             "X-RapidAPI-Key": process.env.RAPID_API_KEY,
//             "X-RapidAPI-Host": process.env.RAPID_API_HOST,
//           },
//         })
//           .then((res) => res.json())
//           .then((imdbData) => {
//             movie.createImdb(imdbData).then((imbd) => {
//               if (imdbData.Ratings) {
//                 imdbData.Ratings.forEach((rating) => {
//                   imbd.createRating(rating).then((res) => console.log(res));
//                 });
//               }
//             });
//           });
//       });
//     });
//   })
//   .catch((error) => console.log(error));

app.listen(5000);
