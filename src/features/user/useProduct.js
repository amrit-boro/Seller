// hooks/useProducts.js
import { useQuery } from "@tanstack/react-query";
import { fetchProduct } from "./product";
import { fetchSearchProducts } from "./product";

// must use before

export function useProducts() {
  return useQuery({
    queryKey: ["product"],
    queryFn: fetchProduct,
  });
}

export function useSeeProducts(itemName) {
  return useQuery({
    queryKey: ["seeProduct", itemName],
    queryFn: () => fetchSearchProducts(itemName),
  });
}
