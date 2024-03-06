import { QueryClient } from "@tanstack/react-query";

export const queryClient = new QueryClient();

export async function fetchProducts({ source }) {
  console.log('this is source', source)


  
  let url = "https://dummyjson.com/products?limit=0";
  

  if (source === "featured") {

    url = "https://dummyjson.com/products?limit=8&skip=10"
    
  }  
  console.log(url)

  if (source === "categories") {
    url = "https://dummyjson.com/products/categories"
  }

  
  
  const response = await fetch(url);
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
  const response = await fetch("https://dummyjson.com/products/" + productId);
  
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
