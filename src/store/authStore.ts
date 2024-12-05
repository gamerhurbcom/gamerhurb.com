import { create } from 'zustand';
import { auth } from '../lib/firebase';
import { 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword,
  signOut as firebaseSignOut,
  onAuthStateChanged,
  User
} from 'firebase/auth';

interface AuthState {
  user: User | null;
  loading: boolean;
  signUp: (email: string, password: string) => Promise<void>;
  signIn: (email: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  loading: true,
  signUp: async (email, password) => {
    await createUserWithEmailAndPassword(auth, email, password);
  },
  signIn: async (email, password) => {
    await signInWithEmailAndPassword(auth, email, password);
  },
  signOut: async () => {
    await firebaseSignOut(auth);
    set({ user: null });
  },
}));

onAuthStateChanged(auth, (user) => {
  useAuthStore.setState({ user, loading: false });
});