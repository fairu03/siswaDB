// backend/models/Profile.js
const mongoose = require('mongoose');

const profileSchema = new mongoose.Schema({
  nisn: { type: String, required: true, unique: true },
  nama: { type: String, required: true },
  tanggal_lahir: { type: Date, required: true },
  kelas: { type: String, required: true },
  email: { type: String, required: true },
  no_hp: { type: String, required: true },
  alamat: { type: String, required: true }
}, { timestamps: true });

module.exports = mongoose.model('Profile', profileSchema);
