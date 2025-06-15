// src/components/Profile/ProfileForm.jsx
import React, { useState } from 'react';

function ProfileForm({ onAdd, onClose }) {
  const [formData, setFormData] = useState({
    nisn: '',
    nama: '',
    tanggal_lahir: '',
    kelas: '',
    email: '',
    no_hp: '',
    alamat: ''
  });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('http://localhost:5000/api/profiles', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      const data = await res.json();
      if (res.ok) {
        onAdd(data);
        setFormData({ nisn: '', nama: '', tanggal_lahir: '', kelas: '', email: '', no_hp: '', alamat: '' });
        onClose();
      } else {
        alert("Gagal menambahkan profil: " + data.message);
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-md shadow-lg">
        <h2 className="text-lg font-bold mb-4">Tambah Profil Siswa</h2>
        <form onSubmit={handleSubmit} className="space-y-3">
          {['nisn', 'nama', 'tanggal_lahir', 'kelas', 'email', 'no_hp', 'alamat'].map(field => (
            <input
              key={field}
              type={field === 'tanggal_lahir' ? 'date' : 'text'}
              name={field}
              placeholder={field.replace('_', ' ').toUpperCase()}
              value={formData[field]}
              onChange={handleChange}
              className="w-full border p-2 rounded"
              required
            />
          ))}
          <div className="flex justify-end space-x-2">
            <button type="button" onClick={onClose} className="bg-gray-300 text-black px-4 py-2 rounded">
              Batal
            </button>
            <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
              Simpan
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ProfileForm;
