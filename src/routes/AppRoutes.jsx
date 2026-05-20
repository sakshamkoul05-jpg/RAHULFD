import { Routes, Route } from 'react-router-dom';

import Home from '../pages/public/Home';
import Stay from '../pages/public/Stay';
import Cafe from '../pages/public/Cafe';
import Login from '../pages/public/Login';
import MainLayout from '../layouts/MainLayout';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout><Home /></MainLayout>} />
      <Route path="/stay" element={<MainLayout><Stay /></MainLayout>} />
      <Route path="/cafe" element={<MainLayout><Cafe /></MainLayout>} />
      
      {/* Login does not use MainLayout, it has its own cinematic wrapper */}
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}
