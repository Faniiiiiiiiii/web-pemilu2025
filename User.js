const mongoose = require("mongoose");

// Schema untuk User
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  authCode: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  isActive: { type: Boolean, default: true },
}, { timestamps: true }); // Menambahkan createdAt dan updatedAt otomatis

// Gunakan model yang sudah ada atau buat model baru
const User = mongoose.models.User || mongoose.model("User", userSchema);

module.exports = User;
