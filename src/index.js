import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import { players } from "./db/schemas/players.js";
import { movies } from "./db/schemas/movies.js";
import { movieDirectors } from "./db/schemas/directors.js";

dotenv.config();

const port = process.env.Port || 3000;
const url = process.env.DATABASE_URL;

mongoose.connect(url).then(() => {
  console.log("mongo connected");
});

const app = express();

app.post("/", async (req, res) => {
  try {
    await players.create({
      firstName: "Bilguun",
      lastName: "Dorj",
      age: 17,
      height: 185,
      weight: 80,
      history: [{ team: "lakers", awards: "mvp" }],
      historyObject: { team: "lakers", awards: "mvp" },
    });
    res.send("success");
  } catch (e) {
    res.send(`error: ${e.message}`);
  }
});

app.get("/", async (req, res) => {
  const player = await players.find({ lastName: "Dorj" });

  res.send(player);
});

app.post("/movies", async (req, res) => {
  try {
    await movies.create({
      plot: "",
      genres: ["Action", "Drama"],
      runtime: 12,
      cast: ["Bat", "Bilguun", "Khaliunaa"],
      poster: "https://example.com/mongol_movie_poster.jpg",
      title: "Mongol kino",
      languages: ["Mongolian", "English"],
      released: "2024-01-11",
      directors: ["Dorjsuren", "Batbold"],
      director_id: "67a605d7ec28b52bf6c22f60",
      rated: "Pg-13",
      awards: {
        wins: 2,
        nominations: 2,
      },
      year: 2024,
      imbd: {
        rating: 8.2,
        votes: 5000,
        id: 450,
      },
      countries: ["Mongolia", "England", "USA"],
      type: "movie",
      tomatoes: {
        viewer: {
          rating: 4.7,
          reviews: 4000,
        },
        critic: {
          rating: 8.0,
          reviews: 1000,
        },
      },
    });
    res.send("success");
  } catch (e) {
    res.send(`error: ${e.message}`);
  }
});

app.post("/director", async (req, res) => {
  try {
    await movieDirectors.create({
      name: "Dorjsuren",
    });

    res.send("success");
  } catch (e) {
    res.send(`error: ${e.message}`);
  }
});

app.get("/movies", async (req, res) => {
  const movie = await movies
    .find({ title: "Mongol kino" })
    .populate("director_id");

  res.send(movie);
});

app.listen(port, () => {
  console.log(`app running on ${port}`);
});
