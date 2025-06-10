import { useItems } from "../hooks/useItems";
import HomeItem from "./HomeItem";

function Home() {
  const { data, isLoading } = useItems();

  return (
    <>
      <div className="jd">
        {isLoading
          ? "loading..."
          : data.map((item) => <HomeItem item={item} key={item.id} />)}
      </div>
    </>
  );
}

export default Home;
