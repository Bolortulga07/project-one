import mongoose from "mongoose";
import { movieDirector } from "./directors.js";
const { Schema } = mongoose;

const awards = new Schema({
  wins: {
    type: Number,
  },
  nominations: {
    type: Number,
  },
});

const imdb = new Schema({
  rating: {
    type: Number,
    min: 0,
    max: 10,
  },
  votes: {
    type: Number,
  },
  id: {
    type: Number,
  },
});

const viewer = new Schema({
  rating: {
    type: Number,
    min: 0,
    max: 5,
  },
  reviews: {
    type: Number,
  },
});

const critic = new Schema({
  rating: {
    type: Number,
    min: 0,
    max: 10,
  },
  reviews: {
    type: Number,
  },
});

const tomatoes = new Schema({
  viewer: viewer,
  critic: critic,
});

const movieSchema = new Schema({
  plot: {
    type: String,
  },
  genres: {
    type: [String],
    required: true,
  },
  runtime: {
    type: Number,
  },
  cast: {
    type: [String],
    required: true,
  },
  poster: {
    type: String,
  },
  title: {
    type: String,
    required: true,
    trim: true,
  },
  languages: {
    type: [String],
    required: true,
    trim: true,
  },
  released: {
    type: String,
    required: true,
  },
  directors: {
    type: [String],
    required: true,
  },
  director_id: { type: mongoose.Schema.ObjectId, ref: "director" },
  rated: {
    type: String,
  },
  awards: awards,
  year: {
    type: Number,
    required: true,
  },
  imdb: imdb,

  countries: {
    type: [String],
    required: true,
  },
  type: {
    type: String,
    required: true,
    enum: ["movie", "series"],
  },
  tomatoes: tomatoes,
});

export const movies = mongoose.model("movie", movieSchema);
