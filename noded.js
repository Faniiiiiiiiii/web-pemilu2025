const mongoose = require("mongoose");

const uri = "mongodb+srv://fanirifani22:212223@cluster0.damkj.mongodb.net/Pemilu2025?retryWrites=true&w=majority";

mongoose.connect(uri)
    .then(() => {
        console.log("Connected to MongoDB!");
        mongoose.disconnect(); // Tutup koneksi setelah pengujian
    })
    .catch((err) => {
        console.error("Connection error:", err.message);
    });
