import { useItems } from "../hooks/useItems";
import HomeItem from "./HomeItem";
import ItemSkeleton from "./ui/ItemSkeleton";

function Home() {
  const { data, isLoading } = useItems();

  return (
    <main className="product-grid">
      {isLoading ? (
        <ItemSkeleton card={9} />
      ) : (
        data.map((item) => <HomeItem item={item} key={item.id} />)
      )}
    </main>
  );
}

export default Home;
