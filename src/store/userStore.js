import { create } from 'zustand';

const useUserStore = create((set) => ({
    users: JSON.parse(localStorage.getItem('users')) || [],

    addUser: (user) => {
        set((state) => {
            const updatedUsers = [...state.users, user];
            localStorage.setItem('users', JSON.stringify(updatedUsers));
            return { users: updatedUsers };
        });
    },

    editUser: (id, updatedUser) => {
        set((state) => {
            const updatedUsers = state.users.map((user) =>
                user.id === id ? { ...user, ...updatedUser } : user
            );
            localStorage.setItem('users', JSON.stringify(updatedUsers));
            return { users: updatedUsers };
        });
    },

    removeUser: (id) => {
        set((state) => {
            const updatedUsers = state.users.filter((user) => user.id !== id);
            localStorage.setItem('users', JSON.stringify(updatedUsers));
            return { users: updatedUsers };
        });
    },

    removeAllUsers: () => {
        set({ users: [] });
        localStorage.removeItem('users');
    },
}));

export default useUserStore;
