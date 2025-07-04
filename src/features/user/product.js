export const fetchProduct = async () => {
  const res = await fetch("http://localhost:3002/api/v1/product");
  if (!res.ok) throw new Error("Network response was not ok");
  const data = await res.json();
  return data;
};

export const fetchSearchProducts = async (itemName) => {
  const res = await fetch(
    `http://localhost:3002/api/v1/product?name=${encodeURIComponent(itemName)}`
  );
  if (!res.ok) throw new Error("Network response was not ok");
  const data = await res.json();
  return data;
};
