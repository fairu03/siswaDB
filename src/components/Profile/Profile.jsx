import React, { useEffect, useState } from 'react';
import ProfileForm from './ProfileForm';
import ProfileView from './ProfileView';

function Profile() {
  const [profiles, setProfiles] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [viewId, setViewId] = useState(null);

  useEffect(() => {
    fetch('http://localhost:5000/api/profiles')
      .then(res => res.json())
      .then(data => setProfiles(data))
      .catch(err => console.error(err));
  }, []);

  const handleAddProfile = (newProfile) => {
    setProfiles(prev => [...prev, newProfile]);
  };

  return (
    <div className="p-4 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-bold">Data Profil Siswa</h1>
        <button onClick={() => setShowForm(true)} className="bg-green-600 text-white px-4 py-2 rounded">
          Tambah
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="table-auto w-full text-left">
          <thead>
            <tr className="border-b">
              <th className="p-2">Nama</th>
              <th className="p-2">NISN</th>
              <th className="p-2">Kelas</th>
              <th className="p-2">Email</th>
              <th className="p-2">No HP</th>
              <th className="p-2">Alamat</th>
              <th className="p-2">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {profiles.map((p) => (
              <tr key={p._id} className="hover:bg-gray-50">
                <td className="p-2">{p.nama}</td>
                <td className="p-2">{p.nisn}</td>
                <td className="p-2">{p.kelas}</td>
                <td className="p-2">{p.email}</td>
                <td className="p-2">{p.no_hp}</td>
                <td className="p-2">{p.alamat}</td>
                <td className="p-2 space-x-2">
                  <button onClick={() => setViewId(p._id)} className="bg-blue-500 text-white px-2 py-1 rounded text-sm">View</button>
                  <button className="bg-yellow-500 text-white px-2 py-1 rounded text-sm">Edit</button>
                  <button className="bg-red-600 text-white px-2 py-1 rounded text-sm">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {showForm && (
        <ProfileForm onAdd={handleAddProfile} onClose={() => setShowForm(false)} />
      )}

      {viewId && (
        <ProfileView id={viewId} onClose={() => setViewId(null)} />
      )}
    </div>
  );
}

export default Profile;
