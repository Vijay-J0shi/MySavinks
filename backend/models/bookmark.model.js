import mongoose from "mongoose";

const bookmarkSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  url: { type: String, required: true },
  title: String,
  summary: String,
  favicon: String,
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model("Bookmark", bookmarkSchema);
