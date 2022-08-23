import express from "express";

// custom imports
import movieController from "../controller/movie.mjs";

const router = express.Router();

router.get("/", movieController.getAllMovies);
router.get("/:movieId", movieController.getMovie);

export default router;
