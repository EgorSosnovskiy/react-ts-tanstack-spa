export interface Product {
  id: number;
  title: string;
  price: number;
}

export interface ProductsResponse {
  products: Product[];
}

export const getProducts = async (): Promise<ProductsResponse> => {
  const response = await fetch('https://dummyjson.com/products?limit=5');

  if (!response.ok) {
    throw new Error('Failed to fetch products');
  }

  return response.json();
};
