import { useState } from "react";

export default function App() {
  const [cart, setCart] = useState([]);
  const [page, setPage] = useState("home");

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
  ];

  return (
    <div className="bg-gray-100 min-h-screen">

      {/* NAVBAR */}
      <nav className="bg-white shadow-md px-10 py-4 flex justify-between items-center">

        <h1 className="text-4xl font-bold text-red-500">
          Foodie Hub
        </h1>

        <div className="flex gap-6 items-center">

          <button
            onClick={() => setPage("home")}
            className="text-lg hover:text-red-500 cursor-pointer"
          >
            Home
          </button>

          <a className="text-lg hover:text-red-500 cursor-pointer">
            Dining
          </a>

          <a className="text-lg hover:text-red-500 cursor-pointer">
            Delivery
          </a>

          <button
            onClick={() => setPage("login")}
            className="border px-5 py-2 rounded-xl hover:bg-red-500 hover:text-white transition"
          >
            Login
          </button>

          <button className="bg-red-500 text-white px-5 py-2 rounded-xl">
            Cart ({cart.length})
          </button>

        </div>
      </nav>

      {/* LOGIN PAGE */}
      {page === "login" && (
        <div className="flex items-center justify-center h-[80vh]">
          <div className="bg-white p-10 rounded-2xl shadow-xl w-[400px]">

            <h2 className="text-3xl font-bold text-center text-red-500 mb-6">
              Login
            </h2>

            <input
              type="email"
              placeholder="Email"
              className="w-full border p-3 rounded-xl mb-4"
            />

            <input
              type="password"
              placeholder="Password"
              className="w-full border p-3 rounded-xl mb-6"
            />

            <button className="w-full bg-red-500 text-white py-3 rounded-xl">
              Login
            </button>

            <p className="text-center mt-4 text-sm">
              Don't have an account? <span className="text-red-500 cursor-pointer">Sign up</span>
            </p>

          </div>
        </div>
      )}

      {/* HOME PAGE */}
      {page === "home" && (
        <>

          {/* HERO SECTION */}
          <div
            className="h-screen bg-cover bg-center relative"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1600&auto=format&fit=crop')",
            }}
          >
            <div className="absolute inset-0 bg-black/60"></div>

            <div className="relative z-10 flex flex-col justify-center items-center text-center text-white h-full px-5">

              <h1 className="text-7xl font-extrabold mb-5">
                Foodie Hub
              </h1>

              <p className="text-2xl mb-8">
                Discover the best food & drinks
              </p>

              <div className="bg-white rounded-2xl flex overflow-hidden w-[700px]">

                <input
                  type="text"
                  placeholder="Search for restaurant, cuisine or dish"
                  className="flex-1 px-5 py-4 outline-none text-black text-lg"
                />

                <button className="bg-red-500 px-8 text-white text-xl">
                  Search
                </button>

              </div>

            </div>
          </div>

          {/* FOOD CARDS */}
          <div className="px-10 py-14">

            <h2 className="text-4xl font-bold mb-10">
              Popular Orders
            </h2>

            <div className="grid md:grid-cols-3 gap-8">

              {foods.map((food, index) => (
                <div
                  key={index}
                  className="bg-white rounded-3xl overflow-hidden shadow-lg hover:scale-105 transition"
                >

                  <img
                    src={food.image}
                    alt={food.name}
                    className="h-64 w-full object-cover"
                  />

                  <div className="p-5">

                    <div className="flex justify-between items-center mb-3">

                      <h3 className="text-3xl font-bold">
                        {food.name}
                      </h3>

                      <span className="text-red-500 font-bold text-2xl">
                        {food.price}
                      </span>

                    </div>

                    <button
                      onClick={() => setCart([...cart, food])}
                      className="w-full bg-red-500 text-white py-3 rounded-xl text-lg hover:bg-red-600"
                    >
                      Add To Cart
                    </button>

                  </div>
                </div>
              ))}

            </div>
          </div>

        </>
      )}

    </div>
  );
}

