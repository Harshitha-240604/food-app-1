import { useState } from "react";

export default function App() {
  const [cart, setCart] = useState([]);

  const foods = [
    {
      name: "Burger",
      price: "₹149",
      image:
        "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=1200&auto=format&fit=crop",
    },
    {
      name: "Pizza",
      price: "₹249",
      image:
        "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=1200&auto=format&fit=crop",
    },
    {
      name: "Biryani",
      price: "₹199",
      image:
        "https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?q=80&w=1200&auto=format&fit=crop",
    },
    {
      name: "Pasta",
      price: "₹179",
      image:
        "https://images.unsplash.com/photo-1525755662778-989d0524087e?q=80&w=1200&auto=format&fit=crop",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100">

      {/* NAVBAR (fixed top) */}
      <nav className="fixed top-0 left-0 w-full bg-white shadow z-50 flex justify-between items-center px-8 py-4">
        <h1 className="text-3xl font-bold text-red-500">Foodie Hub</h1>

        <div className="flex gap-6 items-center">
          <a className="hover:text-red-500 cursor-pointer">Home</a>
          <a className="hover:text-red-500 cursor-pointer">Menu</a>

          <button className="bg-red-500 text-white px-5 py-2 rounded-xl">
            Cart ({cart.length})
          </button>
        </div>
      </nav>

      {/* HERO SECTION (signature page) */}
      <section className="h-screen flex items-center justify-center text-center relative bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1600&auto=format&fit=crop')",
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 text-white px-6">
          <h1 className="text-7xl font-extrabold mb-4">
            Foodie Hub
          </h1>

          <p className="text-2xl mb-6">
            Taste the best food in town
          </p>

          <p className="text-lg opacity-80">
            Scroll down to explore menu ↓
          </p>
        </div>
      </section>

      {/* FOOD SECTION (SCROLL AREA) */}
      <section className="px-8 py-16">
        <h2 className="text-4xl font-bold mb-10">
          Popular Foods
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {foods.map((food, i) => (
            <div
              key={i}
              className="bg-white rounded-3xl shadow-lg overflow-hidden hover:scale-105 transition"
            >
              <img
                src={food.image}
                className="h-60 w-full object-cover"
                alt={food.name}
              />

              <div className="p-5">
                <div className="flex justify-between items-center">
                  <h3 className="text-2xl font-bold">{food.name}</h3>
                  <span className="text-red-500 font-bold">
                    {food.price}
                  </span>
                </div>

                <button
                  onClick={() => setCart([...cart, food])}
                  className="mt-4 w-full bg-red-500 text-white py-3 rounded-xl hover:bg-red-600"
                >
                  Add To Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}