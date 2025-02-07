import mongoose, { Schema } from "mongoose";
import { movies } from "./movies.js";

export const movieDirector = new Schema(
  {
    name: [String],
  },
  { collection: "directors" }
);

export const movieDirectors = mongoose.model("director", movieDirector);
