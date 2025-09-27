import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useAuthStore } from '../store';
import { adminUser, staffUsers, studentUsers } from '../data/users';

import type { Role } from '../store';
const dummyProfiles: { name: string; role: Role; avatar: string }[] = [
  adminUser,
  ...staffUsers,
  ...studentUsers,
];


export default function LoginPage() {
  const [selected, setSelected] = useState(0);
  const login = useAuthStore((s) => s.login);
  const navigate = useNavigate();

  function handleLogin() {
    login(dummyProfiles[selected]);
    navigate('/dashboard');
  }

  return (
  <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-2 py-2">
      <h2 className="text-3xl font-bold mb-8">Login to ERM</h2>
      <div className="flex gap-8 mb-8 flex-wrap justify-center">
        {dummyProfiles.map((profile, i) => (
          <div
            key={profile.role + profile.name}
            className={`cursor-pointer bg-white rounded-xl shadow p-6 flex flex-col items-center border-2 transition-all ${selected === i ? 'border-blue-500' : 'border-transparent'} hover:border-blue-400`}
            onClick={() => setSelected(i)}
          >
            <img src={profile.avatar} alt={profile.name} className="w-16 h-16 rounded-full mb-2" />
            <div className="font-semibold text-lg">{profile.name}</div>
            <div className="text-blue-600 text-xs font-medium">{profile.role}</div>
          </div>
        ))}
      </div>
      <button
        onClick={handleLogin}
        className="mt-4 px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold text-lg hover:bg-blue-700 transition"
      >
        Login as {dummyProfiles[selected].role}
      </button>
    </div>
  );
}
