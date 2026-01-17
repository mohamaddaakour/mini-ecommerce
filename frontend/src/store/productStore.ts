import { create } from "zustand";
import axios from "axios";

import type { ProductStore } from "../types";

const useProductStore = create<ProductStore>((set) => ({
  // global state
  products: [],

  fetchProducts: async () => {
    const response = await axios.get("/products");

    set({ products: response.data });
  },

  createProduct: async (newProduct) => {
    if (!newProduct.name || !newProduct.image || !newProduct.price) {
      return { success: false, message: "Please fill in all fields." };
    }

    const response = await axios.post("/products", newProduct);

    set((state) => ({
      products: [...state.products, response.data],
    }));

    return { success: true, message: "Product created successfully" };
  },
}));

export default useProductStore;
