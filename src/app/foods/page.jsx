import { Suspense } from "react";
// import SearchFood from "../components/SearchFood";

// Option-1: To write Promise
const foodPromise = async () => {
  const res = await fetch(
    "https://phi-lab-server.vercel.app/api/v1/lab/foods/top-foods",
  );
  const data = await res.json();
  const foods = data.data;
  return foods;
};
// option-2: write Promise
// const foodPromise2 = fetch("https://phi-lab-server.vercel.app/api/v1/lab/foods/top-foods")
// .then((res) => res.json());

const FoodPage = () => {
  return (
    <div>
      <h2>FoodPage</h2>
      <div>
        <Suspense fallback={<p>Loading foods...</p>}>
          {/* <SearchFood foodPromise={foodPromise()} /> */}
          {/* <SearchFood foodPromise={foodPromise2} /> */}
        </Suspense>
      </div>
    </div>
  );
};

export default FoodPage;
