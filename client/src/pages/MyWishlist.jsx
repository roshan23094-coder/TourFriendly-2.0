import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import {
  getWishlist,
  deleteWishlist,
} from "../api/wishlistApi";

import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

function MyWishlist() {

  const [wishlist, setWishlist] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchWishlist();
  }, []);

  const fetchWishlist = async () => {

    try {

      const user = JSON.parse(localStorage.getItem("user"));

      if (!user) {
        setLoading(false);
        return;
      }

      const data = await getWishlist(user._id);

      if (data.success) {
        setWishlist(data.wishlist);
      }

    } catch (err) {

      console.log(err);

    } finally {

      setLoading(false);

    }

  };

  const removeItem = async (id) => {

    const confirmDelete = window.confirm(
      "Remove this item from wishlist?"
    );

    if (!confirmDelete) return;

    try {

      await deleteWishlist(id);

      alert("Removed Successfully");

      fetchWishlist();

    } catch (err) {

      console.log(err);

      alert("Failed to Remove");

    }

  };

  if (loading) {

    return (
      <>
        <Navbar />

        <div className="min-h-screen flex justify-center items-center">

          <h1 className="text-4xl font-bold">
            Loading Wishlist...
          </h1>

        </div>

        <Footer />
      </>
    );

  }

  return (
    <>
      <Navbar />

      <div className="max-w-7xl mx-auto pt-32 pb-20 px-6">

        <h1 className="text-5xl font-bold text-center mb-4">
          ❤️ My Wishlist
        </h1>

        <p className="text-center text-gray-600 mb-12 text-lg">
          Save your favourite destinations and hotels.
        </p>

        {wishlist.length === 0 ? (

          <div className="bg-gray-100 rounded-3xl p-16 text-center">

            <h2 className="text-4xl font-bold">
              No Wishlist Items
            </h2>

            <p className="mt-5 text-gray-600">
              Start exploring Karnataka and add your favourite places.
            </p>

            <Link
              to="/districts"
              className="inline-block mt-8 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl"
            >
              Explore Districts
            </Link>

          </div>

        ) : (

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {wishlist.map((item) => {

              const place = item.hotel || item.destination;

              const image = place?.image;

              const title =
                item.hotel
                  ? item.hotel.name
                  : item.destination.title;

              const location =
                item.hotel
                  ? item.hotel.location
                  : item.destination.location;

              const link =
                item.hotel
                  ? `/hotel/${item.hotel._id}`
                  : `/destination/${item.destination._id}`;

              return (

                <div
                  key={item._id}
                  className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl duration-300"
                >

                  <img
                    src={image}
                    alt={title}
                    className="w-full h-64 object-cover"
                  />

                  <div className="p-6">

                    <h2 className="text-2xl font-bold">
                      {title}
                    </h2>

                    <p className="text-gray-500 mt-2">
                      📍 {location}
                    </p>

                    <div className="flex gap-3 mt-8">

                      <Link
                        to={link}
                        className="flex-1 text-center bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl"
                      >
                        View
                      </Link>

                      <button
                        onClick={() =>
                          removeItem(item._id)
                        }
                        className="flex-1 bg-red-600 hover:bg-red-700 text-white py-3 rounded-xl"
                      >
                        Remove
                      </button>

                    </div>

                  </div>

                </div>

              );

            })}

          </div>

        )}

      </div>

      <Footer />
    </>
  );
}

export default MyWishlist;