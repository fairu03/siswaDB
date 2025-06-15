import React, { useEffect, useState } from 'react';

function ProfileView({ id, onClose }) {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    if (id) {
      fetch(`http://localhost:5000/api/profiles/${id}`)
        .then(res => res.json())
        .then(data => setProfile(data))
        .catch(err => console.error(err));
    }
  }, [id]);

  if (!profile) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-md shadow-lg">
        <h2 className="text-lg font-bold mb-4">Detail Profil Siswa</h2>
        <div className="space-y-2">
          <p><strong>Nama:</strong> {profile.nama}</p>
          <p><strong>NISN:</strong> {profile.nisn}</p>
          <p><strong>Tanggal Lahir:</strong> {profile.tanggal_lahir}</p>
          <p><strong>Kelas:</strong> {profile.kelas}</p>
          <p><strong>Email:</strong> {profile.email}</p>
          <p><strong>No HP:</strong> {profile.no_hp}</p>
          <p><strong>Alamat:</strong> {profile.alamat}</p>
        </div>
        <div className="mt-4 text-right">
          <button onClick={onClose} className="bg-gray-300 px-4 py-2 rounded">Tutup</button>
        </div>
      </div>
    </div>
  );
}

export default ProfileView;
