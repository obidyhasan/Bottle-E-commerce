import { useEffect, useState } from "react";
import Bottle from "../bottle/bottle";

function Bottles() {
  const [bottles, setBottles] = useState([]);

  useEffect(() => {
    fetch("bottles.json")
      .then((res) => res.json())
      .then((data) => setBottles(data));
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-5 py-20">
      <div className="text-center max-w-xl mx-auto">
        <h1 className="font-bold text-3xl">Our Top Water Bottle Picks</h1>
        <p className="mt-1">
          Browse through our best-selling water bottles, available in various
          styles and sizes.
        </p>
      </div>
      {/* Product Container */}
      <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {bottles.map((bottle) => (
          <Bottle key={bottle.id} bottle={bottle}></Bottle>
        ))}
      </div>
    </div>
  );
}

export default Bottles;
