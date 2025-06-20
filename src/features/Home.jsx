import { useItems } from "../hooks/useItems";
import HomeItem from "./HomeItem";

function Home() {
  const { data, isLoading } = useItems();

  return (
    <main className="product-grid">
      {isLoading
        ? "loading..."
        : data.map((item) => <HomeItem item={item} key={item.id} />)}
    </main>
  );
}

export default Home;
