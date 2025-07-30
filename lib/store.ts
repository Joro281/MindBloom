import { create } from 'zustand';

interface AuthState {
  isAuthenticated: boolean;
  user: any | null;
  login: (userData: any) => void;
  logout: () => void;
}

interface UIState {
  isAuthModalOpen: boolean;
  isMenuOpen: boolean;
  setAuthModalOpen: (isOpen: boolean) => void;
  setMenuOpen: (isOpen: boolean) => void;
}

interface WellnessState {
  currentMood: string | null;
  moodHistory: Array<{ date: string; mood: string; note?: string }>;
  setCurrentMood: (mood: string) => void;
  addMoodEntry: (mood: string, note?: string) => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  isAuthenticated: false,
  user: null,
  login: (userData) => set({ isAuthenticated: true, user: userData }),
  logout: () => set({ isAuthenticated: false, user: null }),
}));

export const useUIStore = create<UIState>((set) => ({
  isAuthModalOpen: false,
  isMenuOpen: false,
  setAuthModalOpen: (isOpen) => set({ isAuthModalOpen: isOpen }),
  setMenuOpen: (isOpen) => set({ isMenuOpen: isOpen }),
}));

export const useWellnessStore = create<WellnessState>((set) => ({
  currentMood: null,
  moodHistory: [],
  setCurrentMood: (mood) => set({ currentMood: mood }),
  addMoodEntry: (mood, note) => set((state) => ({
    moodHistory: [
      ...state.moodHistory,
      {
        date: new Date().toISOString(),
        mood,
        note,
      },
    ],
  })),
})); 