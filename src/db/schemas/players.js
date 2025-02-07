import mongoose from "mongoose";
const { Schema } = mongoose;

const playerIndividualSchema = new Schema(
  {
    team: String,
    awards: Array,
  },
  { _id: false }
);
const playerSchema = new Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
    validate: {
      message: "age must be older than 16",
      validator: (data) => {
        return data > 16;
      },
    },
  },
  height: {
    type: Number,
    required: true,
  },
  weight: {
    type: Number,
    required: true,
  },
  history: [playerIndividualSchema],
  historyObject: playerIndividualSchema,
});
export const players = mongoose.model("player", playerSchema);
