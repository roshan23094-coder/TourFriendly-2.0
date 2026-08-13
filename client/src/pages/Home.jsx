import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

import Hero from "../components/home/Hero";
import SearchBar from "../components/search/SearchBar";
import WhyChooseUs from "../components/home/WhyChooseUs";
import FinalCTA from "../components/home/FinalCTA";

import HomeDistricts from "../components/district/HomeDistricts";
import PopularDestinations from "../components/destination/PopularDestinations";

function Home() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <Hero />

      {/* Search */}
      <SearchBar />

      {/* Why TourFriendly */}
      <WhyChooseUs />

      {/* Districts */}
      <HomeDistricts />

      {/* Popular Destinations */}
      <PopularDestinations />

      {/* Final Call To Action */}
      <FinalCTA />

      {/* Footer */}
      <Footer />
    </>
  );
}

export default Home;