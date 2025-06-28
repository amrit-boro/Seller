import { useProducts } from "../user/useProduct";
import ProductSkeletonLoader from "./ProductSkeletonLoader";
import SellerItemList from "./SellerItemList";

function SellerProducts() {
  const { data, isLoading, isError } = useProducts(); // coming from the real database... use this every where to access the value....

  const products = data?.data?.products || [];

  console.log(products);

  return (
    <>
      {isLoading ? (
        <ProductSkeletonLoader count={9} />
      ) : (
        <div style={styles.container}>
          {products.map((item) => (
            <SellerItemList items={item} key={item._id} />
          ))}
        </div>
      )}
    </>
  );
}

const styles = {
  container: {
    display: "flex",
    flexWrap: "wrap",
    gap: "24px",
    padding: "20px",
    justifyContent: "center",
  },
};
export default SellerProducts;
