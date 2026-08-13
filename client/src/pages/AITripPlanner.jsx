import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";

import api from "../api/api";

import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

import {
  Sparkles,
  MapPin,
  Map,
  CalendarDays,
  Wallet,
  Users,
  Heart,
  Hotel,
  Star,
  Ticket,
  Utensils,
  Car,
  RotateCcw,
  ArrowRight,
  Camera,
  Waves,
  Trees,
  Mountain,
  Compass,
  Landmark,
  Flower2,
  ShoppingBag,
  CircleHelp,
} from "lucide-react";

// =====================================================
// CATEGORY CONFIGURATION
// =====================================================

const categoryConfig = {
  Temple: {
    icon: Landmark,
    gradient: "from-purple-600 to-pink-500",
  },

  Heritage: {
    icon: Landmark,
    gradient: "from-amber-600 to-orange-500",
  },

  Nature: {
    icon: Trees,
    gradient: "from-green-700 to-emerald-500",
  },

  Beach: {
    icon: Waves,
    gradient: "from-blue-600 to-cyan-500",
  },

  Waterfall: {
    icon: Waves,
    gradient: "from-cyan-500 to-sky-400",
  },

  Wildlife: {
    icon: Trees,
    gradient: "from-green-700 to-lime-500",
  },

  Lake: {
    icon: Waves,
    gradient: "from-sky-600 to-blue-400",
  },

  Trekking: {
    icon: Mountain,
    gradient: "from-emerald-700 to-lime-500",
  },

  Adventure: {
    icon: Compass,
    gradient: "from-red-600 to-orange-500",
  },

  Fort: {
    icon: Landmark,
    gradient: "from-amber-700 to-orange-500",
  },

  Garden: {
    icon: Trees,
    gradient: "from-pink-500 to-rose-400",
  },

  Museum: {
    icon: Landmark,
    gradient: "from-gray-600 to-slate-400",
  },

  "Hill Station": {
    icon: Mountain,
    gradient: "from-orange-500 to-yellow-400",
  },

  Photography: {
    icon: Camera,
    gradient: "from-indigo-600 to-purple-500",
  },

  Spiritual: {
    icon: Flower2,
    gradient: "from-yellow-600 to-orange-500",
  },

  Food: {
    icon: Utensils,
    gradient: "from-red-600 to-yellow-500",
  },

  Market: {
    icon: ShoppingBag,
    gradient: "from-pink-600 to-purple-500",
  },

  Tourist: {
    icon: Compass,
    gradient: "from-blue-600 to-indigo-500",
  },
};

// =====================================================
// AI TRIP PLANNER
// =====================================================

function AITripPlanner() {
  // ===================================================
  // STATE
  // ===================================================

  const [destinations, setDestinations] = useState([]);
  const [hotels, setHotels] = useState([]);

  const [loadingData, setLoadingData] = useState(true);
  const [generating, setGenerating] = useState(false);

  const [plan, setPlan] = useState(null);

  const [form, setForm] = useState({
    district: "",
    days: 2,
    budget: "Low",
    interest: "Nature",
    travelers: 1,
  });

  // ===================================================
  // LOAD DATA
  // ===================================================

  useEffect(() => {
    loadTravelData();
  }, []);

  const loadTravelData = async () => {
    try {
      setLoadingData(true);

      const [destinationResponse, hotelResponse] =
        await Promise.all([
          api.get("/destinations"),
          api.get("/hotels"),
        ]);

      const destinationData =
        destinationResponse.data.destinations ||
        destinationResponse.data.data ||
        [];

      const hotelData =
        hotelResponse.data.hotels ||
        hotelResponse.data.data ||
        [];

      setDestinations(destinationData);
      setHotels(hotelData);

      console.log(
        "Destinations loaded:",
        destinationData.length
      );

      console.log(
        "Hotels loaded:",
        hotelData.length
      );
    } catch (error) {
      console.error(
        "Failed to load planner data:",
        error
      );
    } finally {
      setLoadingData(false);
    }
  };

  // ===================================================
  // GET DISTRICT NAME
  // ===================================================

  const getDistrictName = (item) => {
    if (
      item?.district &&
      typeof item.district === "object"
    ) {
      return (
        item.district.name ||
        item.district._id ||
        ""
      );
    }

    return item?.district || "";
  };

  // ===================================================
  // DISTRICTS
  // ===================================================

  const districts = useMemo(() => {
    const districtNames = destinations
      .map((destination) =>
        getDistrictName(destination)
      )
      .filter(Boolean);

    return [...new Set(districtNames)].sort();
  }, [destinations]);

  // ===================================================
  // INTEREST MATCHING
  // ===================================================

  const matchesInterest = (destination) => {
    const category =
      destination.category?.toLowerCase() || "";

    const title =
      destination.title?.toLowerCase() || "";

    const description =
      destination.description?.toLowerCase() || "";

    const interest =
      form.interest.toLowerCase();

    const text =
      `${category} ${title} ${description}`;

    // Nature
    if (interest === "nature") {
      return (
        text.includes("nature") ||
        text.includes("waterfall") ||
        text.includes("lake") ||
        text.includes("hill") ||
        text.includes("forest") ||
        text.includes("trek") ||
        text.includes("viewpoint")
      );
    }

    // Heritage
    if (interest === "heritage") {
      return (
        text.includes("heritage") ||
        text.includes("temple") ||
        text.includes("fort") ||
        text.includes("palace") ||
        text.includes("monument") ||
        text.includes("historic") ||
        text.includes("church")
      );
    }

    // Adventure
    if (interest === "adventure") {
      return (
        text.includes("trek") ||
        text.includes("adventure") ||
        text.includes("rafting") ||
        text.includes("camp") ||
        text.includes("hill") ||
        text.includes("waterfall")
      );
    }

    // Wildlife
    if (interest === "wildlife") {
      return (
        text.includes("wildlife") ||
        text.includes("forest") ||
        text.includes("national park") ||
        text.includes("sanctuary") ||
        text.includes("zoo")
      );
    }

    // Spiritual
    if (interest === "spiritual") {
      return (
        text.includes("temple") ||
        text.includes("church") ||
        text.includes("mosque") ||
        text.includes("monastery") ||
        text.includes("spiritual")
      );
    }

    // Photography
    if (interest === "photography") {
      return (
        text.includes("viewpoint") ||
        text.includes("lake") ||
        text.includes("waterfall") ||
        text.includes("fort") ||
        text.includes("hill") ||
        text.includes("nature") ||
        text.includes("palace")
      );
    }

    // Food
    if (interest === "food") {
      return (
        destination.famousFood?.length > 0 ||
        text.includes("food") ||
        text.includes("market")
      );
    }

    return true;
  };

  // ===================================================
  // GENERATE PLAN
  // ===================================================

  const generatePlan = () => {
    if (!form.district) {
      alert("Please select a district first.");
      return;
    }

    setGenerating(true);

    setTimeout(() => {
      // =================================================
      // DESTINATIONS FOR DISTRICT
      // =================================================

      const districtDestinations =
        destinations.filter(
          (destination) =>
            getDistrictName(destination)
              .toLowerCase() ===
            form.district.toLowerCase()
        );

      if (districtDestinations.length === 0) {
        alert(
          `No destinations found for ${form.district}.`
        );

        setGenerating(false);
        return;
      }

      // =================================================
      // MATCH INTEREST
      // =================================================

      let matchingDestinations =
        districtDestinations.filter(
          matchesInterest
        );

      if (matchingDestinations.length === 0) {
        matchingDestinations =
          districtDestinations;
      }

      // =================================================
      // SORT BY RATING
      // =================================================

      matchingDestinations =
        [...matchingDestinations].sort(
          (a, b) =>
            (b.rating || 0) -
            (a.rating || 0)
        );

      // =================================================
      // PLACES PER DAY
      // =================================================

      const numberOfDays =
        Number(form.days);

      const placesPerDay = 2;

      const maximumPlaces =
        numberOfDays * placesPerDay;

      const selectedPlaces =
        matchingDestinations.slice(
          0,
          maximumPlaces
        );

      // =================================================
      // CREATE DAILY SCHEDULE
      // =================================================

      const schedule = [];

      for (
        let day = 1;
        day <= numberOfDays;
        day++
      ) {
        const startIndex =
          (day - 1) * placesPerDay;

        const dayPlaces =
          selectedPlaces.slice(
            startIndex,
            startIndex + placesPerDay
          );

        schedule.push({
          day,
          places: dayPlaces,
        });
      }

      // =================================================
      // FIND DISTRICT HOTELS
      // =================================================

      const districtHotels =
        hotels.filter((hotel) => {
          const hotelDistrict =
            getDistrictName(hotel);

          return (
            hotelDistrict &&
            hotelDistrict.toLowerCase() ===
              form.district.toLowerCase()
          );
        });

      // =================================================
      // SORT HOTELS
      // =================================================

      const sortedHotels =
        [...districtHotels].sort(
          (a, b) =>
            (b.rating || 0) -
            (a.rating || 0)
        );

      const recommendedHotels =
        sortedHotels.slice(0, 3);

      // =================================================
      // SELECT HOTEL BASED ON BUDGET
      // =================================================

      let selectedHotel =
        recommendedHotels[0];

      // LOW
      if (form.budget === "Low") {
        selectedHotel =
          [...districtHotels]
            .filter(
              (hotel) =>
                Number(
                  hotel.pricePerNight
                ) > 0
            )
            .sort(
              (a, b) =>
                Number(
                  a.pricePerNight
                ) -
                Number(
                  b.pricePerNight
                )
            )[0] || selectedHotel;
      }

      // MEDIUM
      if (form.budget === "Medium") {
        const hotelsWithPrice =
          [...districtHotels]
            .filter(
              (hotel) =>
                Number(
                  hotel.pricePerNight
                ) > 0
            )
            .sort(
              (a, b) =>
                Number(
                  a.pricePerNight
                ) -
                Number(
                  b.pricePerNight
                )
            );

        if (hotelsWithPrice.length > 0) {
          selectedHotel =
            hotelsWithPrice[
              Math.floor(
                hotelsWithPrice.length / 2
              )
            ];
        }
      }

      // HIGH
      if (form.budget === "High") {
        selectedHotel =
          [...districtHotels].sort(
            (a, b) =>
              Number(
                b.pricePerNight || 0
              ) -
              Number(
                a.pricePerNight || 0
              )
          )[0] || selectedHotel;
      }

      // =================================================
      // TRAVELERS / NIGHTS
      // =================================================

      const travelers =
        Number(form.travelers);

      const days =
        Number(form.days);

      const nights =
        Math.max(days - 1, 1);

      const roomsRequired =
        Math.ceil(travelers / 2);

      // =================================================
      // HOTEL COST
      // =================================================

      let roomPrice = 0;

      if (selectedHotel) {
        roomPrice =
          Number(
            selectedHotel.pricePerNight
          ) || 0;
      }

      const stayCost =
        roomPrice *
        nights *
        roomsRequired;

      // =================================================
      // FOOD COST
      // =================================================

      let foodPerPersonPerDay = 250;

      if (form.budget === "Medium") {
        foodPerPersonPerDay = 400;
      }

      if (form.budget === "High") {
        foodPerPersonPerDay = 700;
      }

      const foodCost =
        foodPerPersonPerDay *
        travelers *
        days;

      // =================================================
      // LOCAL TRAVEL
      // =================================================

      let travelPerPersonPerDay = 100;

      if (form.budget === "Medium") {
        travelPerPersonPerDay = 175;
      }

      if (form.budget === "High") {
        travelPerPersonPerDay = 300;
      }

      const travelCost =
        travelPerPersonPerDay *
        travelers *
        days;

      // =================================================
      // ENTRY FEES
      // =================================================

      const activityCost =
        selectedPlaces.reduce(
          (total, place) =>
            total +
            (Number(place.entryFee) || 0),
          0
        ) * travelers;

      // =================================================
      // TOTAL
      // =================================================

      const estimatedBudget =
        stayCost +
        foodCost +
        travelCost +
        activityCost;

      // =================================================
      // SAVE PLAN
      // =================================================

      setPlan({
        district: form.district,
        days,
        budget: form.budget,
        interest: form.interest,
        travelers,

        schedule,

        recommendedHotels,

        selectedHotel,

        estimatedBudget,

        budgetBreakdown: {
          stay: stayCost,
          food: foodCost,
          travel: travelCost,
          activities: activityCost,
        },

        totalPlaces:
          selectedPlaces.length,
      });

      setGenerating(false);

      // Scroll to result
      setTimeout(() => {
        document
          .getElementById("generated-plan")
          ?.scrollIntoView({
            behavior: "smooth",
          });
      }, 100);
    }, 700);
  };

  // ===================================================
  // RESET
  // ===================================================

  const resetPlanner = () => {
    setPlan(null);

    setForm({
      district: "",
      days: 2,
      budget: "Low",
      interest: "Nature",
      travelers: 1,
    });

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // ===================================================
  // CATEGORY ICON
  // ===================================================

  const getCategoryConfig = (category) => {
    return (
      categoryConfig[category] ||
      categoryConfig.Tourist
    );
  };

  // ===================================================
  // PAGE
  // ===================================================

  return (
    <>
      <Navbar />

      {/* =================================================
          HERO
      ================================================= */}

      <section className="pt-32 pb-16 bg-gradient-to-br from-blue-700 via-indigo-700 to-purple-700 text-white">

        <div className="max-w-6xl mx-auto px-6 text-center">

          <div className="flex justify-center mb-6">

            <div className="w-20 h-20 rounded-3xl bg-white/15 backdrop-blur-sm flex items-center justify-center shadow-xl">

              <Sparkles size={42} />

            </div>

          </div>

          <h1 className="text-5xl md:text-6xl font-extrabold">
            AI Trip Planner
          </h1>

          <p className="text-xl md:text-2xl mt-5 text-blue-100 max-w-3xl mx-auto">
            Tell us what kind of trip you want and
            create a personalized Karnataka itinerary.
          </p>

        </div>

      </section>

      {/* =================================================
          MAIN
      ================================================= */}

      <main className="max-w-6xl mx-auto px-6 py-14">

        {/* =================================================
            FORM
        ================================================= */}

        <div className="bg-white rounded-3xl shadow-2xl border p-8 md:p-10">

          <div className="mb-8">

            <h2 className="text-3xl font-bold">
              Create Your Trip
            </h2>

            <p className="text-gray-500 mt-2">
              Choose your destination, duration,
              budget and interests.
            </p>

          </div>

          {loadingData ? (

            <div className="text-center py-12">

              <div className="flex justify-center mb-4">

                <Map
                  size={52}
                  className="text-blue-600"
                />

              </div>

              <h3 className="text-xl font-bold">
                Loading destinations...
              </h3>

              <p className="text-gray-500 mt-2">
                Preparing your travel database.
              </p>

            </div>

          ) : (

            <div className="grid md:grid-cols-2 gap-7">

              {/* DISTRICT */}

              <div>

                <label className="font-bold flex items-center gap-2">

                  <MapPin size={18} />

                  Destination District

                </label>

                <select
                  value={form.district}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      district: e.target.value,
                    })
                  }
                  className="w-full border border-gray-300 rounded-xl p-4 mt-2 outline-none focus:ring-2 focus:ring-blue-500"
                >

                  <option value="">
                    Select a district
                  </option>

                  {districts.map(
                    (district) => (
                      <option
                        key={district}
                        value={district}
                      >
                        {district}
                      </option>
                    )
                  )}

                </select>

              </div>

              {/* DAYS */}

              <div>

                <label className="font-bold flex items-center gap-2">

                  <CalendarDays size={18} />

                  Number of Days

                </label>

                <select
                  value={form.days}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      days: Number(
                        e.target.value
                      ),
                    })
                  }
                  className="w-full border border-gray-300 rounded-xl p-4 mt-2 outline-none focus:ring-2 focus:ring-blue-500"
                >

                  {[1, 2, 3, 4, 5, 6, 7].map(
                    (day) => (
                      <option
                        key={day}
                        value={day}
                      >
                        {day}{" "}
                        {day === 1
                          ? "Day"
                          : "Days"}
                      </option>
                    )
                  )}

                </select>

              </div>

              {/* BUDGET */}

              <div>

                <label className="font-bold flex items-center gap-2">

                  <Wallet size={18} />

                  Budget Level

                </label>

                <select
                  value={form.budget}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      budget: e.target.value,
                    })
                  }
                  className="w-full border border-gray-300 rounded-xl p-4 mt-2 outline-none focus:ring-2 focus:ring-blue-500"
                >

                  <option value="Low">
                    Budget
                  </option>

                  <option value="Medium">
                    Moderate
                  </option>

                  <option value="High">
                    Premium
                  </option>

                </select>

              </div>

              {/* TRAVELERS */}

              <div>

                <label className="font-bold flex items-center gap-2">

                  <Users size={18} />

                  Travelers

                </label>

                <select
                  value={form.travelers}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      travelers: Number(
                        e.target.value
                      ),
                    })
                  }
                  className="w-full border border-gray-300 rounded-xl p-4 mt-2 outline-none focus:ring-2 focus:ring-blue-500"
                >

                  {[1, 2, 3, 4, 5, 6, 7, 8].map(
                    (number) => (
                      <option
                        key={number}
                        value={number}
                      >
                        {number}{" "}
                        {number === 1
                          ? "Traveler"
                          : "Travelers"}
                      </option>
                    )
                  )}

                </select>

              </div>

              {/* INTEREST */}

              <div className="md:col-span-2">

                <label className="font-bold flex items-center gap-2">

                  <Heart size={18} />

                  What are you interested in?

                </label>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-4">

                  {[
                    "Nature",
                    "Heritage",
                    "Adventure",
                    "Wildlife",
                    "Spiritual",
                    "Photography",
                    "Food",
                  ].map((interest) => {

                    const config =
                      getCategoryConfig(
                        interest
                      );

                    const Icon =
                      config.icon;

                    return (

                      <button
                        key={interest}
                        type="button"
                        onClick={() =>
                          setForm({
                            ...form,
                            interest,
                          })
                        }
                        className={`p-4 rounded-xl border font-semibold transition flex flex-col items-center gap-2 ${
                          form.interest ===
                          interest
                            ? "bg-blue-600 text-white border-blue-600 shadow-lg"
                            : "bg-white text-gray-700 hover:bg-blue-50"
                        }`}
                      >

                        <Icon size={26} />

                        {interest}

                      </button>

                    );
                  })}

                </div>

              </div>

            </div>

          )}

          {/* GENERATE BUTTON */}

          {!loadingData && (

            <button
              onClick={generatePlan}
              disabled={generating}
              className="mt-10 w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 disabled:opacity-60 text-white py-5 rounded-2xl text-xl font-bold shadow-lg transition flex items-center justify-center gap-3"
            >

              <Sparkles size={24} />

              {generating
                ? "Creating Your Trip..."
                : "Generate My Trip Plan"}

            </button>

          )}

        </div>

        {/* =================================================
            GENERATED PLAN
        ================================================= */}

        {plan && (

          <section
            id="generated-plan"
            className="mt-16"
          >

            {/* =================================================
                SUMMARY
            ================================================= */}

            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-3xl p-8 md:p-10 shadow-xl">

              <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-6">

                <div>

                  <p className="text-blue-100">
                    Your personalized trip
                  </p>

                  <h2 className="text-4xl font-extrabold mt-1">
                    {plan.district}
                  </h2>

                </div>

                <div className="text-left md:text-right">

                  <p className="text-blue-100">
                    Estimated Trip Cost
                  </p>

                  <p className="text-3xl font-extrabold">

                    ₹
                    {plan.estimatedBudget.toLocaleString()}

                  </p>

                  <p className="text-sm text-blue-100 mt-2">

                    Approximate cost for{" "}

                    {plan.travelers}{" "}

                    {plan.travelers === 1
                      ? "traveler"
                      : "travelers"}

                  </p>

                </div>

              </div>

              {/* SUMMARY CARDS */}

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">

                <div className="bg-white/15 rounded-xl p-4">

                  <p className="text-blue-100">
                    Duration
                  </p>

                  <p className="font-bold text-xl">
                    {plan.days}{" "}
                    {plan.days === 1
                      ? "Day"
                      : "Days"}
                  </p>

                </div>

                <div className="bg-white/15 rounded-xl p-4">

                  <p className="text-blue-100">
                    Travelers
                  </p>

                  <p className="font-bold text-xl">
                    {plan.travelers}
                  </p>

                </div>

                <div className="bg-white/15 rounded-xl p-4">

                  <p className="text-blue-100">
                    Interest
                  </p>

                  <p className="font-bold text-xl">
                    {plan.interest}
                  </p>

                </div>

                <div className="bg-white/15 rounded-xl p-4">

                  <p className="text-blue-100">
                    Places
                  </p>

                  <p className="font-bold text-xl">
                    {plan.totalPlaces}
                  </p>

                </div>

              </div>

            </div>

            {/* =================================================
                BUDGET BREAKDOWN
            ================================================= */}

            <div className="bg-white rounded-3xl shadow-lg border p-7 mt-7">

              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">

                <Wallet size={25} />

                Budget Breakdown

              </h2>

              <div className="grid md:grid-cols-4 gap-4">

                <div className="bg-gray-50 rounded-2xl p-5">

                  <p className="text-gray-500 flex items-center gap-2">

                    <Hotel size={18} />

                    Stay

                  </p>

                  <p className="text-2xl font-bold mt-2">

                    ₹
                    {plan.budgetBreakdown.stay.toLocaleString()}

                  </p>

                </div>

                <div className="bg-gray-50 rounded-2xl p-5">

                  <p className="text-gray-500 flex items-center gap-2">

                    <Utensils size={18} />

                    Food

                  </p>

                  <p className="text-2xl font-bold mt-2">

                    ₹
                    {plan.budgetBreakdown.food.toLocaleString()}

                  </p>

                </div>

                <div className="bg-gray-50 rounded-2xl p-5">

                  <p className="text-gray-500 flex items-center gap-2">

                    <Car size={18} />

                    Local Travel

                  </p>

                  <p className="text-2xl font-bold mt-2">

                    ₹
                    {plan.budgetBreakdown.travel.toLocaleString()}

                  </p>

                </div>

                <div className="bg-gray-50 rounded-2xl p-5">

                  <p className="text-gray-500 flex items-center gap-2">

                    <Ticket size={18} />

                    Entry & Activities

                  </p>

                  <p className="text-2xl font-bold mt-2">

                    ₹
                    {plan.budgetBreakdown.activities.toLocaleString()}

                  </p>

                </div>

              </div>

              <p className="text-sm text-gray-500 mt-6">

                Estimated cost only. Actual prices may
                vary depending on hotel availability,
                transportation, season and activities.
                Long-distance travel to and from the
                district is not included.

              </p>

            </div>

            {/* =================================================
                SELECTED HOTEL
            ================================================= */}

            {plan.selectedHotel && (

              <div className="bg-blue-50 rounded-3xl p-7 mt-7">

                <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">

                  <Hotel size={26} />

                  Suggested Stay

                </h2>

                <div className="bg-white rounded-2xl p-5 flex flex-col md:flex-row md:items-center md:justify-between gap-5">

                  <div>

                    <h3 className="text-xl font-bold">
                      {plan.selectedHotel.name}
                    </h3>

                    <p className="text-gray-500 mt-2 flex items-center gap-2">

                      <MapPin size={17} />

                      {plan.selectedHotel.location}

                    </p>

                    <p className="text-yellow-500 font-bold mt-2 flex items-center gap-2">

                      <Star
                        size={18}
                        fill="currentColor"
                      />

                      {plan.selectedHotel.rating}

                    </p>

                  </div>

                  <div className="text-left md:text-right">

                    <p className="text-gray-500">
                      From
                    </p>

                    <p className="text-2xl font-bold text-blue-600">

                      ₹
                      {Number(
                        plan.selectedHotel
                          .pricePerNight || 0
                      ).toLocaleString()}

                      /night

                    </p>

                    <Link
                      to={`/hotel/${plan.selectedHotel._id}`}
                      className="inline-flex items-center gap-2 mt-3 bg-blue-600 text-white px-5 py-2 rounded-xl font-semibold hover:bg-blue-700"
                    >

                      View Hotel

                      <ArrowRight size={18} />

                    </Link>

                  </div>

                </div>

              </div>

            )}

            {/* =================================================
                ITINERARY
            ================================================= */}

            <div className="mt-14">

              <h2 className="text-3xl font-bold mb-7 flex items-center gap-3">

                <CalendarDays size={30} />

                Your Day-by-Day Itinerary

              </h2>

              {plan.schedule.map((day) => (

                <div
                  key={day.day}
                  className="bg-white rounded-3xl shadow-lg border p-7 mb-7"
                >

                  <div className="flex items-center gap-4 mb-6">

                    <div className="bg-blue-600 text-white rounded-xl px-5 py-3 font-bold">
                      Day {day.day}
                    </div>

                    <h3 className="text-2xl font-bold">
                      Explore {plan.district}
                    </h3>

                  </div>

                  {day.places.length === 0 ? (

                    <div className="bg-gray-50 rounded-2xl p-6 flex items-center gap-3">

                      <CircleHelp
                        size={24}
                        className="text-gray-500"
                      />

                      <p className="text-gray-600">

                        Enjoy a relaxed day exploring
                        local markets, food and nearby
                        attractions.

                      </p>

                    </div>

                  ) : (

                    <div className="grid md:grid-cols-2 gap-6">

                      {day.places.map(
                        (place) => {

                          const category =
                            place.category ||
                            "Tourist";

                          const config =
                            getCategoryConfig(
                              category
                            );

                          const CategoryIcon =
                            config.icon;

                          return (

                            <Link
                              key={place._id}
                              to={`/destination/${place._id}`}
                              className="group"
                            >

                              <div className="border rounded-2xl overflow-hidden hover:shadow-xl transition bg-white">

                                {/* CATEGORY BANNER */}

                                <div
                                  className={`relative h-52 bg-gradient-to-br ${config.gradient} flex flex-col items-center justify-center text-white overflow-hidden`}
                                >

                                  <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/10 rounded-full" />

                                  <div className="absolute -bottom-12 -left-12 w-36 h-36 bg-white/10 rounded-full" />

                                  <CategoryIcon
                                    size={58}
                                    strokeWidth={1.8}
                                    className="relative z-10 mb-3 group-hover:scale-110 transition-transform"
                                  />

                                  <h4 className="relative z-10 text-2xl font-bold text-center px-5">

                                    {place.title}

                                  </h4>

                                  <p className="relative z-10 mt-1 opacity-90">

                                    {category}

                                  </p>

                                </div>

                                {/* CONTENT */}

                                <div className="p-5">

                                  <div className="flex justify-between gap-3">

                                    <p className="text-gray-500 flex items-center gap-2">

                                      <MapPin size={17} />

                                      {place.location}

                                    </p>

                                    <span className="text-yellow-500 font-bold whitespace-nowrap flex items-center gap-1">

                                      <Star
                                        size={17}
                                        fill="currentColor"
                                      />

                                      {place.rating ||
                                        "N/A"}

                                    </span>

                                  </div>

                                  <p className="text-gray-600 mt-3 line-clamp-3">

                                    {place.description}

                                  </p>

                                  {Number(
                                    place.entryFee
                                  ) > 0 && (

                                    <p className="text-sm text-blue-600 font-semibold mt-3 flex items-center gap-2">

                                      <Ticket size={16} />

                                      Entry: ₹
                                      {place.entryFee}

                                    </p>

                                  )}

                                  <div className="mt-5 text-blue-600 font-bold flex items-center gap-2">

                                    Explore

                                    <ArrowRight
                                      size={18}
                                    />

                                  </div>

                                </div>

                              </div>

                            </Link>

                          );
                        }
                      )}

                    </div>

                  )}

                </div>

              ))}

            </div>

            {/* =================================================
                RECOMMENDED HOTELS
            ================================================= */}

            <div className="mt-14">

              <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-3 mb-7">

                <h2 className="text-3xl font-bold flex items-center gap-3">

                  <Hotel size={30} />

                  Recommended Hotels

                </h2>

                <Link
                  to="/hotels"
                  className="text-blue-600 font-bold flex items-center gap-1"
                >

                  View All

                  <ArrowRight size={18} />

                </Link>

              </div>

              {plan.recommendedHotels.length ===
              0 ? (

                <div className="bg-gray-100 rounded-2xl p-8 text-center">

                  <Hotel
                    size={45}
                    className="mx-auto text-gray-400"
                  />

                  <p className="text-gray-600 mt-3">

                    No hotels are currently
                    available for this district.

                  </p>

                </div>

              ) : (

                <div className="grid md:grid-cols-3 gap-6">

                  {plan.recommendedHotels.map(
                    (hotel) => (

                      <Link
                        key={hotel._id}
                        to={`/hotel/${hotel._id}`}
                      >

                        <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition">

                          {/* HOTEL ICON BANNER */}

                          <div className="relative h-48 bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center text-white overflow-hidden">

                            <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/10 rounded-full" />

                            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-white/10 rounded-full" />

                            <Hotel
                              size={65}
                              strokeWidth={1.6}
                              className="relative z-10"
                            />

                          </div>

                          <div className="p-5">

                            <h3 className="text-xl font-bold">
                              {hotel.name}
                            </h3>

                            <p className="text-gray-500 mt-2 flex items-center gap-2">

                              <MapPin size={17} />

                              {hotel.location}

                            </p>

                            <div className="flex justify-between items-center mt-4">

                              <span className="text-yellow-500 font-bold flex items-center gap-1">

                                <Star
                                  size={17}
                                  fill="currentColor"
                                />

                                {hotel.rating ||
                                  "N/A"}

                              </span>

                              <span className="text-blue-600 font-bold">

                                ₹
                                {Number(
                                  hotel.pricePerNight ||
                                    0
                                ).toLocaleString()}

                                /night

                              </span>

                            </div>

                            <div className="mt-4 text-blue-600 font-semibold flex items-center gap-2">

                              View Hotel

                              <ArrowRight size={17} />

                            </div>

                          </div>

                        </div>

                      </Link>

                    )
                  )}

                </div>

              )}

            </div>

            {/* =================================================
                ACTION BUTTONS
            ================================================= */}

            <div className="flex flex-col md:flex-row gap-4 mt-12">

              <button
                onClick={resetPlanner}
                className="flex-1 border-2 border-blue-600 text-blue-600 hover:bg-blue-50 py-4 rounded-xl font-bold transition flex items-center justify-center gap-2"
              >

                <RotateCcw size={20} />

                Plan Another Trip

              </button>

              <Link
                to="/destinations"
                className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-xl font-bold text-center transition flex items-center justify-center gap-2"
              >

                Explore All Destinations

                <ArrowRight size={20} />

              </Link>

            </div>

          </section>

        )}

      </main>

      <Footer />
    </>
  );
}

export default AITripPlanner;