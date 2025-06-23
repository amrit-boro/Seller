import { useItems } from "../../hooks/useItems";
import ProductSkeletonLoader from "./ProductSkeletonLoader";
import SellerItemList from "./SellerItemList";

function SellerProducts() {
  const { data, isLoading } = useItems();
  return (
    <>
      {isLoading ? (
        <ProductSkeletonLoader count={9} />
      ) : (
        <div style={styles.container}>
          {data.map((items) => (
            <SellerItemList items={items} key={items.id} />
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
