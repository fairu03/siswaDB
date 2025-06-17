// src/App.jsx
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Profile from './components/Profile/Profile';
import ProfileView from './components/Profile/ProfileView';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Profile />} />
        <Route path="/profiles/:id" element={<ProfileView />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
