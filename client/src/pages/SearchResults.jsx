import { useEffect, useMemo, useState } from "react";
import { useLocation } from "react-router-dom";

import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

import api from "../api/api";

import SearchFilters from "../components/search/SearchFilters";
import DestinationResults from "../components/search/DestinationResults";
import HotelResults from "../components/search/HotelResults";

function SearchResults() {

  const { search } = useLocation();

  const keyword =
    new URLSearchParams(search).get("keyword") || "";

  const [destinations, setDestinations] = useState([]);
  const [hotels, setHotels] = useState([]);

  const [district, setDistrict] = useState("All");
  const [category, setCategory] = useState("All");
  const [rating, setRating] = useState("All");
  const [budget, setBudget] = useState("All");
  const [sortBy, setSortBy] = useState("None");

  useEffect(() => {
    fetchResults();
  }, [keyword]);

  const fetchResults = async () => {
    try {

      const destinationRes =
        await api.get("/destinations");

      const hotelRes =
        await api.get("/hotels");

      const key = keyword.toLowerCase();

      const destinationResults =
        destinationRes.data.destinations.filter((item) => {

          return (
            item.title?.toLowerCase().includes(key) ||
            item.location?.toLowerCase().includes(key) ||
            item.state?.toLowerCase().includes(key) ||
            item.category?.toLowerCase().includes(key) ||
            item.description?.toLowerCase().includes(key)
          );

        });

      const hotelResults =
        hotelRes.data.hotels.filter((hotel) => {

          return (
            hotel.name?.toLowerCase().includes(key) ||
            hotel.location?.toLowerCase().includes(key) ||
            hotel.state?.toLowerCase().includes(key) ||
            hotel.description?.toLowerCase().includes(key)
          );

        });

      setDestinations(destinationResults);

      setHotels(hotelResults);

    } catch (err) {

      console.log(err);

    }
  };

  // ==========================
  // Destination Filters
  // ==========================

  const filteredDestinations = useMemo(() => {

    let data = [...destinations];

    if (district !== "All") {

      data = data.filter(
        (d) => d.district?.name === district
      );

    }

    if (category !== "All") {

      data = data.filter(
        (d) => d.category === category
      );

    }

    if (rating !== "All") {

      data = data.filter(
        (d) => d.rating >= Number(rating)
      );

    }

    if (budget === "Free") {

      data = data.filter(
        (d) => d.entryFee === 0
      );

    }

    if (budget === "0-500") {

      data = data.filter(
        (d) =>
          d.entryFee >= 0 &&
          d.entryFee <= 500
      );

    }

    if (budget === "500-2000") {

      data = data.filter(
        (d) =>
          d.entryFee >= 500 &&
          d.entryFee <= 2000
      );

    }

    if (sortBy === "Rating") {

      data.sort(
        (a, b) => b.rating - a.rating
      );

    }

    if (sortBy === "Price") {

      data.sort(
        (a, b) => a.entryFee - b.entryFee
      );

    }

    if (sortBy === "A-Z") {

      data.sort((a, b) =>
        a.title.localeCompare(b.title)
      );

    }

    return data;

  }, [
    destinations,
    district,
    category,
    rating,
    budget,
    sortBy,
  ]);

  // ==========================
  // Hotel Filters
  // ==========================

  const filteredHotels = useMemo(() => {

    let data = [...hotels];

    if (district !== "All") {

      data = data.filter(
        (h) => h.district?.name === district
      );

    }

    if (rating !== "All") {

      data = data.filter(
        (h) => h.rating >= Number(rating)
      );

    }

    if (budget === "0-500") {

      data = data.filter(
        (h) =>
          h.pricePerNight >= 0 &&
          h.pricePerNight <= 500
      );

    }

    if (budget === "500-2000") {

      data = data.filter(
        (h) =>
          h.pricePerNight >= 500 &&
          h.pricePerNight <= 2000
      );

    }

    if (budget === "2000+") {

      data = data.filter(
        (h) => h.pricePerNight >= 2000
      );

    }

    if (sortBy === "Rating") {

      data.sort(
        (a, b) => b.rating - a.rating
      );

    }

    if (sortBy === "Price") {

      data.sort(
        (a, b) =>
          a.pricePerNight -
          b.pricePerNight
      );

    }

    if (sortBy === "A-Z") {

      data.sort((a, b) =>
        a.name.localeCompare(b.name)
      );

    }

    return data;

  }, [
    hotels,
    district,
    rating,
    budget,
    sortBy,
  ]);

  return (
    <>
      <Navbar />

      <div className="max-w-7xl mx-auto pt-32 pb-20 px-6">

        <h1 className="text-5xl font-bold">
          Search Results
        </h1>

        <p className="text-xl text-gray-500 mt-3">

          Showing results for

          <span className="font-bold">

            {" "} "{keyword}"

          </span>

        </p>

        <div className="mt-6 text-blue-700 font-bold text-xl">

          Total Results :

          {" "}

          {filteredDestinations.length +
            filteredHotels.length}

        </div>

        <div className="mt-10">

          <SearchFilters

            district={district}
            setDistrict={setDistrict}

            category={category}
            setCategory={setCategory}

            rating={rating}
            setRating={setRating}

            budget={budget}
            setBudget={setBudget}

            sortBy={sortBy}
            setSortBy={setSortBy}

          />

        </div>

        <h2 className="text-4xl font-bold mt-10 mb-6">

          Destinations

        </h2>

        <DestinationResults
          destinations={filteredDestinations}
        />

        <h2 className="text-4xl font-bold mt-20 mb-6">

          Hotels

        </h2>

        <HotelResults
          hotels={filteredHotels}
        />

      </div>

      <Footer />
    </>
  );
}

export default SearchResults;