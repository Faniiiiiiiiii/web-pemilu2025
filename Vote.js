const mongoose = require("mongoose");

// Skema untuk data vote
const voteSchema = new mongoose.Schema({
  authCode: { type: String, required: true, unique: true }, // ID unik pengguna
  candidate: { type: String, required: true }, // Kandidat yang dipilih
  timestamp: { type: Date, default: Date.now }, // Waktu voting
});

// Gunakan model yang sudah ada atau buat model baru
module.exports = mongoose.models.Vote || mongoose.model("Vote", voteSchema);
