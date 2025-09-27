import { create } from 'zustand';

export type Role = 'admin' | 'staff' | 'student' | null;

interface UserProfile {
  name: string;
  role: Role;
  avatar: string;
}

interface AuthState {
  user: UserProfile | null;
  login: (profile: UserProfile) => void;
  logout: () => void;
  setRole: (role: Role) => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  login: (profile) => {
    localStorage.setItem('erm_user', JSON.stringify(profile));
    set({ user: profile });
  },
  logout: () => {
    localStorage.removeItem('erm_user');
    set({ user: null });
  },
  setRole: (role) => {
    set((state) => {
      if (!state.user) return state;
      const updated = { ...state.user, role };
      localStorage.setItem('erm_user', JSON.stringify(updated));
      return { user: updated };
    });
  },
}));

// On load, hydrate from localStorage
const stored = localStorage.getItem('erm_user');
if (stored) {
  useAuthStore.setState({ user: JSON.parse(stored) });
}
