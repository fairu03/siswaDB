import React, { useEffect, useState } from 'react';

function ProfileForm({ initialData = null, onAdd, onUpdate, onClose }) {
  const [formData, setFormData] = useState({
    nisn: '',
    nama: '',
    tanggal_lahir: '',
    kelas: '',
    email: '',
    no_hp: '',
    alamat: ''
  });

  // Set nilai awal jika edit
  useEffect(() => {
    if (initialData) {
      setFormData(initialData);
    }
  }, [initialData]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const isEdit = Boolean(initialData);
    const url = isEdit
      ? `http://localhost:5000/api/profiles/${initialData._id}`
      : 'http://localhost:5000/api/profiles';

    const method = isEdit ? 'PUT' : 'POST';

    try {
      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const data = await res.json();

      if (res.ok) {
        if (isEdit) {
          onUpdate && onUpdate(data);
        } else {
          onAdd && onAdd(data);
        }
        onClose();
      } else {
        alert("Gagal menyimpan data: " + data.message);
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-md shadow-lg">
        <h2 className="text-lg font-bold mb-4">
          {initialData ? 'Edit Profil Siswa' : 'Tambah Profil Siswa'}
        </h2>
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
              {initialData ? 'Update' : 'Simpan'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ProfileForm;
