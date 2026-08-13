import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

function About() {
  return (
    <>
      <Navbar />

      <div className="pt-32 pb-20 max-w-6xl mx-auto px-6">

        <h1 className="text-5xl font-bold text-center mb-10">
          About TourFriendly
        </h1>

        <p className="text-lg text-gray-700 leading-9 text-center">
          TourFriendly is a modern travel platform built to help travelers
          discover amazing destinations, book comfortable hotels, and plan
          unforgettable journeys across India.

          <br /><br />

          Our mission is to make travel planning simple, secure, and enjoyable
          by combining technology with personalized recommendations.

          <br /><br />

          Features include destination discovery, hotel booking,
          AI trip planning, secure authentication, reviews,
          wishlists, and much more.
        </p>

      </div>

      <Footer />
    </>
  );
}

export default About;