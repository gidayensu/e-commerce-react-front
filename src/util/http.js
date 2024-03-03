import { QueryClient } from "@tanstack/react-query";

export const queryClient = new QueryClient();

export async function fetchProducts({ featured }) {
  let source = "https://fakestoreapi.com/products";

  featured ? (source = "https://fakestoreapi.com/products?limit=8") : source;
  
  const response = await fetch(source);
  if (!response.ok) {
    const error = new Error("An error occured in fetching the products");
    error.code = response.status;
    error.info = await response.json();
    throw error;
  } else {
    
    const products = await response.json();
    return products;
  }
}

export async function fetchProduct({productId}) {
  const response = await fetch("https://fakestoreapi.com/products/" + productId);
  
  if (!response.ok) {
    const error = new Error("An error occured in fetching the product");
    error.code = response.status;
    error.info = await response.json();
    throw error;
  } else {
    const product = await response.json();
    return [product];
  }
}
