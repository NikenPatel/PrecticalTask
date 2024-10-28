import { create } from 'zustand';
import productData from "../data/product.json"
const useProductStore = create((set) => ({
    products: productData,
    cart: [],

    addToCart: (product, quantity) => {
        set((state) => {
            const existingProductIndex = state.cart.findIndex(item => item.id === product.id);
            if (existingProductIndex >= 0) {
                const updatedCart = [...state.cart];
                updatedCart[existingProductIndex].quantity += quantity;
                return { cart: updatedCart };
            } else {
                const newCartItem = { ...product, quantity };
                return { cart: [...state.cart, newCartItem] };
            }
        });
    },

    removeFromCart: (id) => {
        set((state) => ({
            cart: state.cart.filter(item => item.id !== id),
        }));
    },

    updateCartQuantity: (id, quantity) => {
        set((state) => {
            const updatedCart = state.cart.map(item => {
                if (item.id === id) {
                    return { ...item, quantity };
                }
                return item;
            });
            return { cart: updatedCart };
        });
    },

    clearCart: () => {
        set({ cart: [] });
    },
}));

export default useProductStore;
