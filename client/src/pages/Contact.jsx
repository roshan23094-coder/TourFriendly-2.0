import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

function Contact() {
  return (
    <>
      <Navbar />

      <div className="pt-32 pb-20 max-w-5xl mx-auto px-6">

        <h1 className="text-5xl font-bold text-center mb-10">
          Contact Us
        </h1>

        <div className="bg-white shadow-xl rounded-2xl p-10">

          <h2 className="text-2xl font-bold mb-5">
            Get in Touch
          </h2>

          <p className="text-lg">
            📧 Email: support@tourfriendly.com
          </p>

          <p className="text-lg mt-4">
            📞 Phone: +91 9876543210
          </p>

          <p className="text-lg mt-4">
            📍 Hassan, Karnataka, India
          </p>

        </div>

      </div>

      <Footer />
    </>
  );
}

export default Contact;