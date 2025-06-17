import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

function ProfileView() {
  const { id } = useParams();
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:5000/api/profiles/${id}`)
      .then(res => res.json())
      .then(data => {
        setProfile(data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Gagal mengambil data:', err);
        setLoading(false);
      });
  }, [id]);

  // Fungsi format tanggal
  function formatTanggal(tanggalISO) {
    if (!tanggalISO) return '-';
    const date = new Date(tanggalISO);
    if (isNaN(date)) return '-';
    return date.toLocaleDateString('id-ID', {
      day: '2-digit',
      month: 'long',
      year: 'numeric',
    });
  }

  if (loading) return <div className="p-6 text-center">Memuat data...</div>;
  if (!profile || profile.message === 'Profil tidak ditemukan') {
    return (
      <div className="p-6 text-center text-red-600">
        Profil tidak ditemukan.
        <div className="mt-4">
          <Link to="/" className="text-blue-600 hover:underline">← Kembali ke daftar</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Detail Profil Siswa</h1>
      <div className="bg-white shadow-md rounded-lg p-6 space-y-4">
        <div><strong>Nama:</strong> {profile.nama}</div>
        <div><strong>NISN:</strong> {profile.nisn}</div>
        <div><strong>Tanggal Lahir:</strong> {formatTanggal(profile.tanggal_lahir)}</div>
        <div><strong>Kelas:</strong> {profile.kelas}</div>
        <div><strong>Email:</strong> {profile.email}</div>
        <div><strong>No HP:</strong> {profile.no_hp}</div>
        <div><strong>Alamat:</strong> {profile.alamat}</div>
        <div className="pt-4">
          <Link to="/" className="text-blue-600 hover:underline">&larr; Kembali ke daftar</Link>
        </div>
      </div>
    </div>
  );
}

export default ProfileView;
