import { create } from 'zustand';

const useAuthStore = create((set) => ({
    isAuthenticated: localStorage.getItem('isAuthenticated') === 'true',

    login: (username, password) => {
        const validUsername = 'admin';
        const validPassword = 'admin';

        if (username === validUsername && password === validPassword) {
            localStorage.setItem('isAuthenticated', 'true');
            set({ isAuthenticated: true });
            return true;
        } else {
            return false;
        }
    },

    logout: () => {
        localStorage.removeItem('isAuthenticated');
        set({ isAuthenticated: false });
    },
}));

export default useAuthStore;
