// hooks/useProducts.js
import { useQuery } from "@tanstack/react-query";
import { fetchProduct } from "./product";

export function useProducts() {
  return useQuery({
    queryKey: ["product"],
    queryFn: fetchProduct,
  });
}
