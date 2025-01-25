import { create } from "zustand";
import axiosInstance from "../lib/axios";
import { toast } from "react-hot-toast";

export const useProductsStore = create((set, get) => ({
    products: [],
    loading: false,
    getProducts: async () => {
        set({loading: true})
        try {
            const res = await axiosInstance.get("/products");
            set({ products: res.data, loading: false });
        } catch (error) {
            console.error("getProducts error:", error.response)
            set({ products: [], loading: false });
            toast.error(error.response?.data?.message || "An error occurred")
        }
    },
    getProduct: async (id) => {
        try {
            const res = await axiosInstance.get(`/products/${id}`)
            return res.data;
        }
        catch(error){
            console.error("getProduct error:", error.response)
            toast.error(error.response?.data?.message || "An error occurred")
        }
    }
}));