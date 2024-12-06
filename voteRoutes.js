const express = require('express');
const router = express.Router();
const Vote = require('./models/Vote'); // Sesuaikan path dengan lokasi file Vote.js

// POST /vote - Menyimpan vote ke database
// POST /vote - Menyimpan vote ke database
router.post('/', async (req, res) => {
    try {
      const { candidate, authCode } = req.body;
  
      // Validasi data
      if (!candidate || typeof candidate !== 'string' || !authCode || typeof authCode !== 'string') {
        console.error('Invalid data in request body:', req.body);
        return res.status(400).json({ message: 'Kandidat dan kode autentikasi yang valid diperlukan.' });
      }
  
      // Log data sebelum menyimpan
      console.log('Saving vote:', { candidate, authCode });
  
      // Simpan vote ke database
      const newVote = new Vote({ candidate, authCode });
      await newVote.save();
  
      console.log('Vote saved successfully:', newVote);
  
      // Respon sukses
      res.status(201).json({ message: 'Vote berhasil disimpan!' });
    } catch (error) {
      console.error('Error saving vote:', error.message);
      res.status(500).json({ message: 'Terjadi kesalahan saat menyimpan vote.', error: error.message });
    }
  });
  