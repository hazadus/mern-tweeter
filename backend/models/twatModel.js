import mongoose from "mongoose";

const Schema = mongoose.Schema;

const twatSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
    },
    body: {
      type: String,
      required: true,
    },
  },
  { timestamps: true },
);

export default mongoose.model("Twat", twatSchema);
