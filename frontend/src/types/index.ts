export interface CreateState {
  name: string;
  price: string;
  image: string;
}

export interface Product {
  _id?: string;
  name: string;
  price: string;
  image: string;
}

export interface ProductStore {
  products: Product[];
  fetchProducts: () => Promise<void>;
  createProduct: (
    newProduct: Product
  ) => Promise<{ success: boolean; message: string }>;
}