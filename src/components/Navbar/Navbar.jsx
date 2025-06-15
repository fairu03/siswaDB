import React from 'react'
import logo from '../../assets/react.svg';

const Navbar = () => {
    return (
        <>
  <nav className="sticky top-0 z-50 bg-white shadow-md">
    <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
      {/* Logo: ikon + teks */}
      <div className="flex items-center space-x-2 text-blue-600 font-bold text-xl">
        {/* Heroicon "home" */}
        
         {/* Logo */}
        <div className="flex items-center space-x-2">
          <img src={logo} alt="Logo" className="h-8 w-8" />
          <span className="text-blue-600 font-bold text-xl">Sistem Absensi SMKN 1 Baros</span>
        </div>

      </div>
      {/* Menu */}
      <ul className="flex space-x-6 text-gray-700 font-medium">
        <li>
          <a href="#" className="hover:text-blue-500">
            Beranda
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-blue-500">
            Tentang
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-blue-500">
            Layanan
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-blue-500">
            Kontak
          </a>
        </li>
      </ul>
    </div>
  </nav>
  {/* Konten panjang */}

</>



    )
}

export default Navbar